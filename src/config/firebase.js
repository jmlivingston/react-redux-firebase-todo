import * as firebase from 'firebase'
import { FIREBASE } from './constants'

const firebaseApp = firebase.initializeApp({
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE_URL,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID
})

export const firebaseRef = path => {
  return firebaseApp.database().ref(path)
}
