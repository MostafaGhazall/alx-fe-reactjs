import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found'); // Explicitly throw an error for 404 (user not found)
    } else {
      throw new Error('An error occurred'); // Catch all other errors
    }
  }
};
