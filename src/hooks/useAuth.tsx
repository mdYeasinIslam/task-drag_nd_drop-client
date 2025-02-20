import { useContext } from "react"
import { AuthProvider } from "../Context/AuthContext"


export const useAuth = () => {
    const context = useContext(AuthProvider) 
    return context
}