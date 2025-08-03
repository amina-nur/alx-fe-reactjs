import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

// Fetch users with optional advanced filters (username, location, repos)
const fetchUsers = async (username, location, minRepos) => {
  // Build query string
  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
  return response.data.items; // Return array of users
};


export { fetchUsers };