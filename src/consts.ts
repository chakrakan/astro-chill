import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "devkanisk",
  DESCRIPTION:
    "Hi, this is Kanisk! Welcome to my corner of the internet. Here, I share my passions, projects, and ponderings with the world. Hope you enjoy your stay!",
  EMAIL: "dev.kanisk@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "devkanisk's home page.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A smattering of thoughts on topics I am dabbling with.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of arbitrary projects with links to repositories and live demos where applicable.",
};

export const REVIEWS: Metadata = {
  TITLE: "Reviews",
  DESCRIPTION:
    "My reviews and thoughts on movies, TV shows, restaurants, books, and games.",
};

export const REVIEW_CATEGORIES = {
  movies: { label: "Movies", emoji: "🎬" },
  "tv-shows": { label: "TV Shows", emoji: "📺" },
  restaurants: { label: "Restaurants", emoji: "🍽️" },
  books: { label: "Books", emoji: "📚" },
  games: { label: "Games", emoji: "🎮" },
} as const;

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/devkanisk",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/chakrakan",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/kaniskc",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/kan.yyz/",
  },
];

export const INTRO_TITLES = ["Software Engineer", "Musician"];

// Places I've visited
// Each entry needs: country, lat, lng
export const VISITED_PLACES = [
  // North America
  { country: "Canada", city: "Toronto", lat: 43.6532, lng: -79.3832 },
  { country: "Canada", city: "Montreal", lat: 45.5017, lng: -73.5673 },
  { country: "Canada", city: "Tobermory", lat: 45.2534, lng: -81.6667 },
  { country: "USA", city: "New York", lat: 40.7128, lng: -74.0060 },
  { country: "USA", city: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { country: "USA", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { country: "USA", city: "Chicago", lat: 41.8781, lng: -87.6298 },
  { country: "USA", city: "Washington, D.C.", lat: 38.8951, lng: -77.0364 },
  { country: "USA", city: "Las Vegas", lat: 36.1699, lng: -115.1398 },
  { country: "USA", city: "Miami", lat: 25.7617, lng: -80.1918 },
  { country: "Mexico", city: "Cancun", lat: 21.1619, lng: -86.8466 },
  
  // Europe
  { country: "France", city: "Paris", lat: 48.8566, lng: 2.3522 },
  { country: "Spain", city: "Barcelona", lat: 41.3851, lng: 2.1734 },
  { country: "Spain", city: "Valencia", lat: 39.4700, lng: -0.3769 },
  { country: "Spain", city: "Madrid", lat: 40.4168, lng: -3.7038 },
  { country: "Spain", city: "Granada", lat: 37.3891, lng: -5.9812 },
  { country: "Spain", city: "Alicante", lat: 37.3891, lng: -5.9812 },
  { country: "Italy", city: "Rome", lat: 41.9028, lng: 12.4964 },
  { country: "Italy", city: "Milan", lat: 45.4642, lng: 9.1914 },
  { country: "Italy", city: "Venice", lat: 45.4414, lng: 12.3155 },
  { country: "Italy", city: "Florence", lat: 43.7696, lng: 11.2558 },
  { country: "Italy", city: "Como", lat: 45.80079, lng: 9.08065 },
  { country: "Germany", city: "Berlin", lat: 52.5200, lng: 13.4050 },
  { country: "Germany", city: "Munich", lat: 48.1371, lng: 11.5761 },
  { country: "Germany", city: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { country: "Netherlands", city: "Amsterdam", lat: 52.3702, lng: 4.8952 },
  { country: "Belgium", city: "Brussels", lat: 50.8503, lng: 4.3517 },
  { country: "Switzerland", city: "Zurich", lat: 47.3769, lng: 8.5417 },
  { country: "Switzerland", city: "Lucerne", lat: 47.0502, lng: 8.3093 },
  { country: "Switzerland", city: "Interlaken", lat: 46.6833, lng: 7.8667 },
  { country: "Switzerland", city: "Grindelwald", lat: 46.6833, lng: 7.8667 },
  { country: "Switzerland", city: "Zermatt", lat: 46.0000, lng: 8.0000 },
  { country: "Poland", city: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { country: "Poland", city: "Krakow", lat: 50.0647, lng: 19.9383 },
  { country: "Poland", city: "Wroclaw", lat: 51.1079, lng: 17.0386 },
  { country: "Poland", city: "Lodz", lat: 51.7590, lng: 19.4560 },
  { country: "Poland", city: "Katowice", lat: 50.2667, lng: 19.0208 },
  { country: "Poland", city: "Zakopane", lat: 49.2969, lng: 20.1373 },
  { country: "Czech Republic", city: "Prague", lat: 50.0755, lng: 14.4378 },
  { country: "Czech Republic", city: "Ostrava", lat: 49.8175, lng: 18.2555 },
  { country: "Hungary", city: "Budapest", lat: 47.4979, lng: 19.0402 },
  { country: "Austria", city: "Vienna", lat: 48.2082, lng: 16.3738 },
  { country: "Austria", city: "Salzburg", lat: 47.8067, lng: 13.0511 },
  { country: "Austria", city: "Innsbruck", lat: 47.2667, lng: 11.3833 },
  { country: "United Kingdom", city: "London", lat: 51.5074, lng: -0.1278 },
  { country: "Turkey", city: "Istanbul", lat: 41.0082, lng: 28.9784 },

  // Asia
  { country: "India", city: "New Delhi", lat: 28.6139, lng: 77.2090 },
  { country: "India", city: "Mumbai", lat: 19.0760, lng: 72.8777 },
  { country: "India", city: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { country: "India", city: "Hyderabad", lat: 17.3850, lng: 78.4867 },
  { country: "India", city: "Kolkata", lat: 22.5726, lng: 88.3639 },
] as const;
