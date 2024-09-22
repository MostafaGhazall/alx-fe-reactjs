import axios from 'axios';

// Base URL for GitHub search API
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

/**
 * Fetch GitHub users based on advanced search criteria
 * @param {Object} params - search parameters (username, location, minRepos)
 */
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the search query based on input parameters
    let query = `${username ? `${username} in:login` : ''}`;

    // Append location to query if provided
    if (location) {
      query += ` location:${location}`;
    }

    // Append minimum repository count to query if provided
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    // Make the API call
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}&per_page=10`);

    // Return the list of users
    return response.data;
  } catch (error) {
    // Handle the error by throwing it so the calling function can catch it
    throw new Error('Error fetching users from GitHub API');
  }
};
