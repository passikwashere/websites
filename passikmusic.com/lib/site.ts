// Single source of truth for all PASSIK site content.

export const BOOKING_EMAIL = "hello@passikmusic.com";

export interface LiveSet {
  id: string;
  title: string;
  meta: string;
}

// Newest first. IDs from youtube.com/watch?v=<id>
export const liveSets: LiveSet[] = [
  { id: "oUoa3-DZT94", title: "Street Parade Zürich 2026", meta: "Hard Techno" },
  { id: "R-d9IbzY508", title: "Street Parade Zürich 2025", meta: "Peak-Time Techno" },
  { id: "aG4SZmb2gjw", title: "MÄX Zürich", meta: "Hyper Techno" },
];

export interface Track {
  title: string;
  url: string;
}

// Top tracks on Spotify
export const tracks: Track[] = [
  { title: "Frozen", url: "https://open.spotify.com/track/32z75WXw0sSu3RTZRGslYV" },
  { title: "Habits (Stay High)", url: "https://open.spotify.com/track/7x0SwQUtAYnRShcYcTAI2S" },
  { title: "Englishman", url: "https://open.spotify.com/track/0wWKGO24THstuviZNa68nI" },
  { title: "Mwaki", url: "https://open.spotify.com/track/5Ni7T85i1Fz5il1I2xFC5m" },
  { title: "Running Around", url: "https://open.spotify.com/track/4J3yerHIU3PyIPOH8dm1QM" },
  { title: "Don't Be A Fool", url: "https://open.spotify.com/track/7G5z7gzrFZmdftBKdx46Th" },
  { title: "Lonely Road", url: "https://open.spotify.com/track/17V0J9aC7yxa0wNmg2hPPy" },
  { title: "The King's Affirmation", url: "https://open.spotify.com/track/46gvaz973ageWzKG5L1Ybs" },
  { title: "Ocarina", url: "https://open.spotify.com/track/6MBTTj1DmjIg9S7bDfq0mP" },
];

export const bio = [
  "PASSIK is Swiss DJ and producer Pascal Münger. He played his first club show at 15 and has since shared stages with Robin Schulz, Lost Frequencies, Timmy Trumpet and Alan Walker.",
  "He has played Street Parade Zürich and SunIce Festival St. Moritz, has millions of streams on Spotify, and his tracks have been supported by Tiësto, Don Diablo and Timmy Trumpet.",
];

export const socials = [
  { name: "Instagram", url: "https://instagram.com/passikmusic" },
  { name: "Spotify", url: "https://open.spotify.com/artist/0bo2VeKBPFR4jRI0c5JWsp" },
  { name: "Apple Music", url: "https://music.apple.com/ch/artist/passik/1114842537" },
  { name: "SoundCloud", url: "https://soundcloud.com/passikdj" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCUC-H28zzRKamiT0UAfy12w" },
  { name: "TikTok", url: "https://www.tiktok.com/@passikmusic" },
  { name: "Facebook", url: "https://facebook.com/passikdj" },
];

