import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Config = {
  apiKey: "AIzaSyAyZLEeJpPhJuop5uU-ZOzI366o69GSeDM",
  authDomain: "ganesh-2bed9.firebaseapp.com",
  projectId: "ganesh-2bed9",
  storageBucket: "ganesh-2bed9.appspot.com",
  messagingSenderId: "795313981435",
  appId: "1:795313981435:web:a90775290625d8bacbad5e"
};

// Initialize Firebase
const app = initializeApp(Config);

export const authentication = getAuth(app);
