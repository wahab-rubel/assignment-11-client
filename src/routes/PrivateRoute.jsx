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
      const decoded = decodeJwt(token);  // Decode JWT using the jose library
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;  // Check if token is expired
    } catch (err) {
      console.error("Invalid or expired token", err);
      return false;
    }
  };

  if (!user || !token || !isTokenValid(token)) {
    // Redirect to the login page if the user is not authenticated or token is invalid
    return <Navigate to="/auth/login" />;
  }

  // If the user is authenticated, return the element (protected component)
  return element;
};

export default PrivateRoute;
