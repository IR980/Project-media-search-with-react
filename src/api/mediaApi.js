import axios from "axios";

const unsplash = import.meta.env.VITE_UNSPLASH_KEY;
const pexel = import.meta.env.VITE_PEXELS_KEY;
const giphy = import.meta.env.VITE_GIPHY_KEY;

// Unsplash
export async function fetchPhoto(query, page = 1, per_page = 20) {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${unsplash}`,
      },
    }
  );

  return response.data;
}

// Pexels Videos
export async function fetchVidios(query, per_page = 14) {
  const res = await axios.get(
    "https://api.pexels.com/v1/videos/search",
    {
      params: {
        query,
        per_page,
      },
      headers: {
        Authorization: pexel,
      },
    }
  );

  return res.data;
}

// Giphy GIFs
export async function fetchGifs(query, per_page = 14) {
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: giphy,
        q: query,
        limit: per_page,
      },
    }
  );

  return res.data;
}