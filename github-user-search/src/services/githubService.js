import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;  // Return user data if found
  } catch (error) {
    throw new Error('User not found');  // Throw an error if the user doesn't exist
  }
};
