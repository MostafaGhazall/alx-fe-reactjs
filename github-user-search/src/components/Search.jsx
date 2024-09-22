import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the function to call the GitHub API

const Search = () => {
  const [username, setUsername] = useState('');    // State to handle input value
  const [userData, setUserData] = useState(null);  // State to store fetched user data
  const [loading, setLoading] = useState(false);   // State to manage loading state
  const [error, setError] = useState(null);        // State to manage errors

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from reloading the page
    setLoading(true);
    setError(null);  // Clear any previous errors
    try {
      const data = await fetchUserData(username);  // Call API to fetch user data
      setUserData(data);  // Store user data
    } catch (err) {
      setError('Looks like we can’t find the user.');  // Handle error
      setUserData(null);  // Clear previous data on error
    } finally {
      setLoading(false);  // End loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  // Update state with input value
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on loading, error, or user data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;