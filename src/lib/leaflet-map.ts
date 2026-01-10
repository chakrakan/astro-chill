import type { Map } from 'leaflet';

export interface PlaceData {
  country: string;
  city?: string;
  lat: number;
  lng: number;
}

export async function initTravelMap(containerId: string): Promise<Map | null> {
  const mapContainer = document.getElementById(containerId);
  if (!mapContainer) return null;

  const placesData = mapContainer.dataset.places;
  if (!placesData) return null;

  const places: PlaceData[] = JSON.parse(placesData);
  if (places.length === 0) return null;

  const L = await import('leaflet');

  // Clear loading state
  mapContainer.innerHTML = '';

  // Create map with world view - centered to show most landmasses
  const map = L.map(containerId, {
    scrollWheelZoom: false,
    minZoom: 1,
    maxZoom: 18,
  }).setView([30, 0], 1);

  // Add tile layer with a nice style
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19,
  }).addTo(map);

  // Custom icon for places - pin points to bottom center
  const placeIcon = L.divIcon({
    className: 'place-marker',
    html: '📍',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
  });

  // Add markers for each place
  places.forEach((place) => {
    if (!place.lat || !place.lng) return;

    const popupContent = `
      <div class="place-popup">
        <h3>${place.country}</h3>
        ${place.city ? `<div class="city">${place.city}</div>` : ''}
        <div class="visited">✓ Visited</div>
      </div>
    `;

    L.marker([place.lat, place.lng], { icon: placeIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });

  // Keep world view - don't auto-fit to markers
  // Users can zoom in manually to see specific regions

  return map;
}

export async function initSingleLocationMap(
  containerId: string,
  lat: number,
  lng: number,
  title: string
): Promise<Map | null> {
  const mapContainer = document.getElementById(containerId);
  if (!mapContainer || !lat || !lng) return null;

  const L = await import('leaflet');

  mapContainer.innerHTML = '';

  const map = L.map(containerId, {
    scrollWheelZoom: false,
    zoomControl: true,
    dragging: true,
  }).setView([lat, lng], 15);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  }).addTo(map);

  const icon = L.divIcon({
    className: 'custom-marker',
    html: '🍽️',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });

  L.marker([lat, lng], { icon }).addTo(map).bindPopup(title);

  return map;
}
