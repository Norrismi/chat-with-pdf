import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDIkgMmYqiJEbNYdCpQOd-oJvbnHmz1HGM",
    authDomain: "chat-with-pdf-27d62.firebaseapp.com",
    projectId: "chat-with-pdf-27d62",
    storageBucket: "chat-with-pdf-27d62.appspot.com",
    messagingSenderId: "595596690793",
    appId: "1:595596690793:web:21c94ce0119fd0608a29f8"
  };
//Checking against a dupliceate client
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);
  const storage = getStorage(app);

  export {db, storage};