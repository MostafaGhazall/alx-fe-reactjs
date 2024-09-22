import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');    // State for search input
  const [userData, setUserData] = useState(null);  // State to store fetched user data
  const [loading, setLoading] = useState(false);   // State to handle loading
  const [error, setError] = useState('');          // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);      // Start loading
    setError('');          // Clear previous errors
    setUserData(null);     // Clear previous user data

    try {
      const data = await fetchUserData(username);  // Fetch user data from GitHub
      setUserData(data);   // If successful, store fetched data
    } catch (err) {
      setError('Looks like we can’t find the user.');  // If error, show error message
    } finally {
      setLoading(false);   // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Update input value
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}  {/* Show loading while fetching */}
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error if any */}

      {userData && (    {/* Show user data if fetched successfully */}
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name ? userData.name : userData.login}</h2>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
