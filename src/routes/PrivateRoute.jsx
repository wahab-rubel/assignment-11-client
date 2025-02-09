import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { decodeJwt } from "jose";  // Import from 'jose'

const PrivateRoute = ({ element }) => {
  const { user } = useAuthContext();
  const token = localStorage.getItem("jwt_token");

  // Verify the token
  const isTokenValid = (token) => {
    try {
      const decoded = decodeJwt(token);  
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;  
    } catch (err) {
      console.error("Invalid or expired token", err);
      return false;
    }
  };

  if (!user || !token || !isTokenValid(token)) {
    return <Navigate to="/auth/login" />;
  }

  return element;
};

export default PrivateRoute;
