import React from "react";
import { useAuthContext } from "./contexts/AuthContext";  

const Profile = () => {
  const { user, logout } = useAuthContext();

  if (!user) {
    return <div>Please log in to view your profile</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Profile;
