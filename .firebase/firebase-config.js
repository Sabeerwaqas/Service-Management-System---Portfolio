import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/database/dist/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmtKe7RFKIyhQGlOPPXrlm-p03FA3XUrU",
  authDomain: "service-management-syste-bc5d4.firebaseapp.com",
  projectId: "service-management-syste-bc5d4",
  storageBucket: "service-management-syste-bc5d4.appspot.com",
  messagingSenderId: "558556022058",
  appId: "1:558556022058:web:14363219693811de7fca53",
  measurementId: "G-YN8LCD3RP4"
};

export default database = getFirestore();
export const app = initializeApp(firebaseConfig);
