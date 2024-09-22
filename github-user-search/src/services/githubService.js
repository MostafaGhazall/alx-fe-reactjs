// src/services/githubService.js
import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users?q';

// Function to fetch GitHub users based on search criteria
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${username} in:login&per_page=10`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
