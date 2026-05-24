import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const shows = [
  { id: "20", title: "Prison Break", year: 2005 },
  { id: "21", title: "True Detective", year: 2014 },
  { id: "22", title: "Vikings", year: 2013 },
  { id: "23", title: "Outlander", year: 2014 },
  { id: "24", title: "1883", year: 2021 },
  { id: "25", title: "The Last Kingdom", year: 2015 },
  { id: "26", title: "We Were the Lucky Ones", year: 2024 },
  { id: "27", title: "Snowfall", year: 2017 },
  { id: "28", title: "Lost", year: 2004 },
  { id: "29", title: "Mayans M.C.", year: 2018 },
  { id: "30", title: "24", year: 2001 },
  { id: "31", title: "The Night Of", year: 2016 },
  { id: "32", title: "Sharp Objects", year: 2018 },
  { id: "33", title: "Queen of the South", year: 2016 },
  { id: "34", title: "Weeds", year: 2005 },
  { id: "35", title: "Fargo", year: 2014 },
  { id: "36", title: "The Affair", year: 2014 },
  { id: "37", title: "1923", year: 2022 },
  { id: "38", title: "Top Boy", year: 2011 },
  { id: "39", title: "Euphoria", year: 2019 },
  { id: "40", title: "The Fall", year: 2013 },
];

async function fetchPoster(title, year) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(title)}&first_air_date_year=${year}`;
  const res = await fetch(url);
  const data = await res.json();
  const result = data.results?.[0];
  if (!result?.poster_path) {
    console.warn(`  No poster found for: ${title} (${year})`);
    return null;
  }
  return `${BASE_IMAGE_URL}${result.poster_path}`;
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = join(__dirname, "../src/data.ts");
let content = readFileSync(dataPath, "utf-8");

for (const show of shows) {
  console.log(`Fetching poster for: ${show.title}`);
  const imageUrl = await fetchPoster(show.title, show.year);
  if (!imageUrl) continue;

  // Replace the imageUrl for this specific show block by matching title + nearby imageUrl
  const titlePattern = `title: "${show.title}"`;
  const titleIndex = content.indexOf(titlePattern);
  if (titleIndex === -1) {
    console.warn(`  Could not find show block for: ${show.title}`);
    continue;
  }

  // Find the next imageUrl after this title
  const imageUrlIndex = content.indexOf("imageUrl:", titleIndex);
  const lineEnd = content.indexOf("\n", imageUrlIndex);
  const oldLine = content.slice(imageUrlIndex, lineEnd);
  const newLine = `imageUrl: "${imageUrl}",`;

  content = content.slice(0, imageUrlIndex) + newLine + content.slice(lineEnd);
  console.log(`  Updated: ${imageUrl}`);
}

writeFileSync(dataPath, content, "utf-8");
console.log("\ndata.ts updated successfully.");
