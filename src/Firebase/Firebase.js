import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMLJV8tdA-GFfSdhZ0QtF8qKSRCpveGbU",
  authDomain: "ecommerce-bebes-shop.firebaseapp.com",
  projectId: "ecommerce-bebes-shop",
  storageBucket: "ecommerce-bebes-shop.appspot.com",
  messagingSenderId: "811185287115",
  appId: "1:811185287115:web:a7cd21eac7042bd6dcd04e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);