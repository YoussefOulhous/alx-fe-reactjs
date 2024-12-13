import axios from "axios";


const BASE_URL = 'https://api.github.com/search/users' ;

/**
 * Fetch users based on advanced search criteria.
 * @param {string} query - The query string for filtering users.
 * @returns {Promise<Object>} - The search results from GitHub.
 */

export const fetchUsersByCriteria  = async (query) => {
    try{
        const response = await axios.get(`${BASE_URL}?q=${query}`);
        return response.data
    } catch (error){
        console.error("Error fetching users by criteria:", error.message);
        throw error ;
    }
}