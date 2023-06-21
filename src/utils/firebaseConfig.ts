import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPcz3yiYl-FmrEImjF1Gk0izB8FGSrZrU",
  authDomain: "pokedex-8f045.firebaseapp.com",
  projectId: "pokedex-8f045",
  storageBucket: "pokedex-8f045.appspot.com",
  messagingSenderId: "873912490723",
  appId: "1:873912490723:web:b2309737107da10d1503d6",
  measurementId: "G-PVHN56PBM6"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
