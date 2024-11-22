import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const ProtectedRoute = ({isAuthenticated , children }) => {
        if(!isAuthenticated){
            return <Navigate to='/profile' />
        }

        if(isAuthenticated){
            return children 
        }
    }

 
}

export default ProtectedRoute