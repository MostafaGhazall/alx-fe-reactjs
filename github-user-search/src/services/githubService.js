import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;  // Return user data from response
  } catch (error) {
    throw new Error('User not found');  // Handle error
  }
};