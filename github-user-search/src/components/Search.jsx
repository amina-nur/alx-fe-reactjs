import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();// Prevent page reload
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '220px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', border: 'none', background: '#007bff', color: '#fff', borderRadius: '4px' }}>
          Search
        </button>
      </form>

      {/* Feedback */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we cant find the user</p>}

      {/* Display user info */}
      {user && (
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', maxWidth: '300px', margin: '0 auto' }}>
          <img src={user.avatar_url} alt={user.login} style={{ width: '100px', borderRadius: '50%' }} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;
