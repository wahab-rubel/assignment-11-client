import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNi14SGN8dYIYGFD5K_yh6tG-yyOwVOXg",
  authDomain: "assignment-35a80.firebaseapp.com",
  projectId: "assignment-35a80",
  storageBucket: "assignment-35a80.firebasestorage.app",
  messagingSenderId: "192423835760",
  appId: "1:192423835760:web:568e540f3287b92ec5dcb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app; // 
