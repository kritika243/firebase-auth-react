import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import config from './config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from 'firebase/auth'

const app = initializeApp({
  apiKey: config.REACT_APP_FIREBASE_API_KEY,
  authDomain: config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: config.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: config.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: config.REACT_APP_FIREBASE_APP_ID,
})

export const auth = getAuth()
export const createUser = createUserWithEmailAndPassword
export const signInUser = signInWithEmailAndPassword
export const resetPassword = sendPasswordResetEmail
export const changeEmail = updateEmail
export const changePassword = updatePassword
export default app
