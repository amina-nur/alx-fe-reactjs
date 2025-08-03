import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q';

// Fetch users with optional advanced filters (username, location, repos)
const fetchUsersAdvanced = async (username, location, minRepos) => {
  let query = `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
  return response.data.items;
};

// Fetch user data by username (basic info)
const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export { fetchUsersAdvanced, fetchUserData };