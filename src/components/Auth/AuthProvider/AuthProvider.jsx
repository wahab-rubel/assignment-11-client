import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import jwt from "jsonwebtoken";
import { decode } from "jwt-decode";

// Firebase authentication instance
const auth = getAuth(app);

const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Store JWT token to localStorage
  const storeToken = (token) => {
    localStorage.setItem("jwt_token", token);
  };

  // Remove JWT token from localStorage
  const removeToken = () => {
    localStorage.removeItem("jwt_token");
  };

  // Login function with email/password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const token = jwt.sign({ uid: userCredential.user.uid }, process.env.REACT_APP_SECRET_KEY, { expiresIn: "1h" });
        storeToken(token);
      });
  };

  // Google sign-in function
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        const token = jwt.sign({ uid: userCredential.user.uid }, process.env.REACT_APP_SECRET_KEY, { expiresIn: "1h" });
        storeToken(token);
      });
  };

  // Logout function
  const logout = () => {
    signOut(auth);
    removeToken();
  };

  // Check for JWT token on initial load and decode it
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const token = localStorage.getItem("jwt_token");
        if (token) {
          const decodedToken = decode(token);
          setUser(decodedToken);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, googleSignIn, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
