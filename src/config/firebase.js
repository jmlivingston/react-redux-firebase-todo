import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAG7e5fVEm1Y8TxbJ41w4kzHApyvfHik5s',
  authDomain: 'johnlivingston-qa-11485.firebaseapp.com',
  databaseURL: 'https://johnlivingston-qa-11485.firebaseio.com',
  projectId: 'johnlivingston-qa-11485',
  storageBucket: 'johnlivingston-qa-11485.appspot.com',
  messagingSenderId: '470191318511'
}

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp
