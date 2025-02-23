import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, googleSignIn } = useAuthContext(); // ✅ useAuthContext 

  const navigate = useNavigate();

  // Custom login function
  const login = async (email, password) => {
    const response = await fetch("https://assignment-11-server-green-nine.vercel.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("authToken", data.token);
      navigate("/dashboard");
    } else {
      setError("Login failed. Please try again.");
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://assignment-11-server-green-nine.vercel.app/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem('jwt_token', data.token);
            toast.success('Login successful!');
        } else {
            toast.error('Invalid credentials!');
        }
    } catch (error) {
        console.error('Login Error:', error);
        toast.error('Something went wrong!');
    }
};


  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.ibb.co/9pQqhKV/2.jpg')` }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border">
        <h2 className="text-3xl font-extrabold text-center mb-6">Welcome Back!</h2>
        {user && (
          <div className="text-center mb-6">
            <img src={user.photoURL || "https://via.placeholder.com/100"} alt="User"
              className="w-20 h-20 rounded-full mx-auto" />
            <p className="text-lg font-semibold mt-2">{user.displayName || "Guest"}</p>
          </div>
        )}
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
        {!user && (
          <>
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg"
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="w-full px-4 py-2 border rounded-lg"
                  value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg"
                disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Or login with:</p>
              <button onClick={handleGoogleLogin} className="w-full mt-4 py-3 bg-red-500 text-white rounded-lg"
                disabled={loading}>
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
