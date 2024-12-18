import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const fetchUserData =async (username) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data ;
        
    } catch(error){
        console.error("Error fetching user data:", error.message)
        throw error ;
    }

}