import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCmtKe7RFKIyhQGlOPPXrlm-p03FA3XUrU",
  authDomain: "service-management-syste-bc5d4.firebaseapp.com",
  projectId: "service-management-syste-bc5d4",
  storageBucket: "service-management-syste-bc5d4.appspot.com",
  messagingSenderId: "558556022058",
  appId: "1:558556022058:web:cc0fc3dd4b305d9a7fca53",
  measurementId: "G-GX893EN5E0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
