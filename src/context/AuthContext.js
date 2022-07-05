import React,{ createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase/index'

export const AuthContext = createContext()

export const useAuth = () => {
    
    const context = useContext(AuthContext)
    if(!context) throw new Error ('No hay un proveedor de autenticacion')
    return context
}

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)


    const logout = () => {
        signOut(auth)
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[])


    return(
        <AuthContext.Provider value={{user, logout, loading, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}