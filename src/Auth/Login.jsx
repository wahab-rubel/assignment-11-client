import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login, googleSignIn } = useAuthContext(); // Access user from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Google login error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        {user && (
          <div className="text-center mb-6">
            <img
              src={user.photoURL || "https://via.placeholder.com/100"}
              alt={user.displayName || "User"}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="text-lg font-semibold text-gray-800 mt-2">
              {user.displayName || "Guest"}
            </p>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            <p>{error}</p>
          </div>
        )}
        {!user && (
          <>
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Or login with:</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full mt-4 py-3 bg-red-500 text-white font-semibold flex items-center justify-center rounded-lg shadow-md hover:bg-red-600 transition-all"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login with Google"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
