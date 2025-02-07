import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";  
import router from "./routes/router"; 
import "./index.css";

// Wrap the entire app with AuthProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
