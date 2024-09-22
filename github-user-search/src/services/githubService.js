import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;   // Return user data if successful
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');   // If 404 error, throw a specific message
    } else {
      throw new Error('An error occurred');  // Throw a generic error for other issues
    }
  }
};