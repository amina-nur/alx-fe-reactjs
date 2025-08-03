import axios from 'axios';

// Function to fetch user data from GitHub API
async function fetchUserData(username){
    const response = await axios.get('https://api.github.com/users/' + username);
    return response.data;
    
}
export { fetchUserData };