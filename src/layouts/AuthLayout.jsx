import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Navbar /> {/* Navbar for Auth Pages */}
      <Banner></Banner>
      <main className="min-h-screen flex items-center justify-center">
        <Outlet /> {/* Renders child routes like Login or Register */}
      </main>
      <Footer /> {/* Footer for Auth Pages */}
    </div>
  );
};

export default AuthLayout;
