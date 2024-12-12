
const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL ;

export const fetchGitHubUser = async (username) => {
    try{
        const respons = await fetch(`${API_URL}/users/${username}`);
        const data = await respons.json()
        return data;
    } catch(error) {
        console.error("Error fetching user data:", error);
        throw error;
    }

}