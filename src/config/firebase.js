import * as firebase from 'firebase'
import { firebaseConfig } from './constants'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp
