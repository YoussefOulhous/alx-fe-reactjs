import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute() {

    // const useAuth = () => {
    //     const [isAuthenticated, setIsAuthenticated] = useState(false);
      
    //     const login = () => setIsAuthenticated(true);
    //     const logout = () => setIsAuthenticated(false);
      
    //     return { isAuthenticated, login, logout };
    // };

    const ProtectedRoute = ({isAuthenticated , children }) => {
        if(!isAuthenticated){
            return <Navigate to='/profile' />
        }

        if(isAuthenticated){
            return children 
        }
    }

 
}

export default ProtectedRoute ;