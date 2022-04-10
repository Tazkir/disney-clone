import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBB79IgXj-xaZJfaSaSwXGy8vA4ypQuHB4",
  authDomain: "disney-plus-4926f.firebaseapp.com",
  projectId: "disney-plus-4926f",
  storageBucket: "disney-plus-4926f.appspot.com",
  messagingSenderId: "925626826302",
  appId: "1:925626826302:web:75901643c8d470888b1b6f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
