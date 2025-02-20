import { useEffect, useState } from "react"
import { onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth"
import  {AuthProvider, googleProvider } from "./AuthContext"
import auth from "../firebase/firebase.init"
import { useAxiosPublic } from "../hooks/useAxiosPublic"


export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(false)
    const axiosPublic = useAxiosPublic()
    const signUpAuth = (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
  
    const signInAuth = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutAuth = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserAuth = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }
    const googleAuth = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userInfo = currentUser
        //     if (userInfo) {
        //         const email= {email:userInfo.email}
        //         axiosPublic.post('/jwt', email)
        //             .then(res => {
        //                 localStorage.setItem('token', res.data)
        //                   setLoading(false)
        //             }).catch(e => {
        //                  console.log(e)
        //              })
        //     }
        //     else {
        //          localStorage.removeItem('token')
        //     }
            setUser(userInfo)
            setLoading(false)
        })
        return ()=> unSubscribe()
    }, [])
    console.log(user)
    const info = {
        user,
        loading,
        dark,
        setDark,
        setLoading,
        signUpAuth,
        signInAuth,
        signOutAuth,
        updateUserAuth,
        googleAuth
    }
  return (
      <AuthProvider.Provider value={info}>
          {children}
    </AuthProvider.Provider>
  )
}