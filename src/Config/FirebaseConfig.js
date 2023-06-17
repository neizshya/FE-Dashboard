import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAYfQKbbD0UjqzbF8pVe7-TKOUoMI5cgKc",
  authDomain: "example-marketplace-d0f64.firebaseapp.com",
  projectId: "example-marketplace-d0f64",
  storageBucket: "example-marketplace-d0f64.appspot.com",
  messagingSenderId: "698086783372",
  appId: "1:698086783372:web:ed868f76750b87fb89fea9",
  measurementId: "G-KBNH2R0STJ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)