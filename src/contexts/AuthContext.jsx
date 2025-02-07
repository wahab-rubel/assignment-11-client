import React, { createContext, useState, useEffect, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";


const AuthContext = createContext();
const auth = getAuth(app);

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

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const token = jwt.sign({ uid: userCredential.user.uid }, process.env.REACT_APP_SECRET_KEY, { expiresIn: "1h" });
        storeToken(token);
      });
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        const token = jwt.sign({ uid: userCredential.user.uid }, process.env.REACT_APP_SECRET_KEY, { expiresIn: "1h" });
        storeToken(token);
      });
  };

  const logout = () => {
    signOut(auth);
    removeToken();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
