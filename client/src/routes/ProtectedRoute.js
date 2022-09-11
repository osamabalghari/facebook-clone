import React, { useContext } from 'react'
import postContext from '../context/postContext/postContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const context = useContext(postContext)
    // const { isAuthenticated } = context
    // if (isAuthenticated) {
    //     <Navigate to="/profile" />
    // }
    return (
        children
    )
}

export default ProtectedRoute