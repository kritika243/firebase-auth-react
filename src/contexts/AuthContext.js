import React, { useContext, useState, useEffect } from 'react'
const AuthContext = React.createContext()
import {
  auth,
  createUser,
  signInUser,
  resetPassword,
  changeEmail,
  changePassword,
} from '../Firebase'

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [input])

  const value = {
    currentUser,
    signup,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
