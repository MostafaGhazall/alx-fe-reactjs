import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import fetchUserData

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // Add state for location
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      // Use fetchUserData, passing both username and location
      const data = await fetchUserData({ username, location });
      setUserData(data.items); // Set user data from the API response
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
        />
        <input
          type="text"
          value={location}  // Input for location
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          {userData.map((user) => (
            <div key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <h3>{user.login}</h3>
              <p>{user.location || 'No location available'}</p> {/* Show location if available */}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
