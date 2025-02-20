import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router"; 
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

// Wrap the entire app with AuthProvider
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>  
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
