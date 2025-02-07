import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to hold error messages
  const [loading, setLoading] = useState(false); // State to manage loading
  const { login, googleSignIn } = useAuthContext(); // Custom hook for authentication context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setError(""); // Reset error message before login attempt
    try {
      await login(email, password); // Function to authenticate user
      navigate("/"); // Redirect to homepage or desired route after login
    } catch (error) {
      setError(error.message); // Set error message if login fails
      console.error("Login error:", error.message);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true); // Start loading state
    setError(""); // Reset error message before Google login attempt
    try {
      await googleSignIn(); // Google login functionality
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setError(error.message); // Set error message if Google login fails
      console.error("Google login error:", error.message);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Or login with:</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-2 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login with Google"}
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/auth/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
