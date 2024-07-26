import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSXoCY3KSSZgJy0JbsR3IsSkNg0dMrN68",
  authDomain: "desafio3furniro.firebaseapp.com",
  projectId: "desafio3furniro",
  storageBucket: "desafio3furniro.appspot.com",
  messagingSenderId: "727079577344",
  appId: "1:727079577344:web:a9450456ce2c174cf7b5e5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
