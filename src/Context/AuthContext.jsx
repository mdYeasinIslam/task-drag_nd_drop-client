import { createContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthProvider = createContext(null)

export const googleProvider = new GoogleAuthProvider()