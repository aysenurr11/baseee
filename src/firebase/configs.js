import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzESeM3JTpg3qww5V4hIuKMVpLIv0i6uc",
    authDomain: "fir-7b319.firebaseapp.com",
    projectId: "fir-7b319",
    storageBucket: "fir-7b319.appspot.com",
    messagingSenderId: "200427429738",
    appId: "1:200427429738:web:0cf66813a7d086656e0f13",
    measurementId: "G-KV54ZTPNC4"
  };

  initializeApp(firebaseConfig);

  const DB = getFirestore();
  const AUTH = getAuth();

  export {DB,AUTH}