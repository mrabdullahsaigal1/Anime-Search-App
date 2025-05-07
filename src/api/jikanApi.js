import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const searchAnime = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}/anime`, {
    params: { q: query, page }
  });
  return response.data;
};

export const getAnimeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/anime/${id}`);
  return response.data;
};
