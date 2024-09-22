import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the search query based on input parameters
    let query = `${username ? `${username} in:login` : ''}`;
    
    if (location) {
      query += ` location:${location}`;
    }
    
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}&per_page=10`);
    return response.data;  // Return the search results
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
