import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PrivateRoot = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return (
           <div className="flex w-1/2 mt-10  flex-col gap-4">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        )
    }
    if (user) { 
        return children
    }
    return <Navigate to={'/signIn'} state={{ pathname: location.pathname }} replace/>
}