import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');    
  const [userData, setUserData] = useState(null);  
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState('');          

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  
    setError('');      
    setUserData(null); 

    try {
      const data = await fetchUserData(username);  
      setUserData(data);   
    } catch (err) {
      setError("Looks like we can't find the user.");  // Ensure exact match
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}  
      {error && <p style={{ color: 'red' }}>{error}</p>}  

      {userData && (
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
