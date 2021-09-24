import React, { useContext, useState, useEffect } from 'react'

import {
  auth,
  createUser,
  signInUser,
  resetPassword,
  changeEmail,
  changePassword,
} from '../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return createUser(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}