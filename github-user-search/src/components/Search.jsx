import { useState } from 'react';
import { fetchUserData, fetchUsersAdvanced } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]); // for multiple user results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    setLoading(true);
    setError(false);
    setUser(null);
    setResults([]);

    try {
      if (location || minRepos) {
        // Use advanced search if extra filters are provided
        const users = await fetchUsersAdvanced(username, location, minRepos);
        setResults(users);
      } else {
        // Use simple search if only username is provided
        const data = await fetchUserData(username);
        setUser(data);
      }
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
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '220px' }}
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '220px' }}
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repos (optional)"
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '220px' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', border: 'none', background: '#007bff', color: '#fff', borderRadius: '4px' }}>
          Search
        </button>
      </form>

      {/* Feedback */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Looks like we cant find the user</p>}

      {/* Display single user result */}
      {user && (
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', maxWidth: '300px', margin: '0 auto' }}>
          <img src={user.avatar_url} alt={user.login} style={{ width: '100px', borderRadius: '50%' }} />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
        </div>
      )}

      {/* Display multiple user results from advanced search */}
      {results.length > 0 && (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
          {results.map((u) => (
            <div key={u.id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
              <img src={u.avatar_url} alt={u.login} style={{ width: '60px', borderRadius: '50%' }} />
              <h4>{u.login}</h4>
              <a href={u.html_url} target="_blank" rel="noreferrer">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
