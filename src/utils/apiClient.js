import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://your-api-url.com",  // Replace with your actual API URL
});

// Intercept every request to add the JWT token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");  // Retrieve the JWT token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;  // Add token to Authorization header
    }
    return config;  // Proceed with the request
  },
  (error) => {
    return Promise.reject(error);  // Handle request errors
  }
);

// Intercept response to handle 401 and 403 errors
apiClient.interceptors.response.use(
  (response) => response,  // If the response is successful, return it
  (error) => {
    if (error.response && error.response.status === 401) {
      // If unauthorized (401), redirect to login page
      window.location.href = "/login";
    }
    if (error.response && error.response.status === 403) {
      // If forbidden (403), show an alert
      alert("You do not have permission to access this resource.");
    }
    return Promise.reject(error);  // Handle response errors
  }
);

export default apiClient;  // Export the Axios instance
