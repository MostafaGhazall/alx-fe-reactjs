import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const searchUsers = async (username) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `token ${apiKey}` } : {};

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?q=${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};