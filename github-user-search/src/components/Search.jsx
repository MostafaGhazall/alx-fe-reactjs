import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');    // State to capture input
  const [userData, setUserData] = useState(null);  // State to store user data
  const [loading, setLoading] = useState(false);   // State to handle loading
  const [error, setError] = useState(null);        // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);  // Clear previous errors
    try {
      const data = await fetchUserData(username);  // Fetch user data from GitHub
      setUserData(data);  // Store the fetched data
    } catch (err) {
      setError('Looks like we can’t find the user.');  // Handle the error
      setUserData(null);  // Clear previous data
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Update the username state
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on the state */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name ? userData.name : userData.login}</h2>  {/* Display user's name if available, else show login */}
          <p>Username: {userData.login}</p>  {/* Display the login (GitHub username) */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
