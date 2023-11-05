import React from "react";
import { Link ,Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext"; // Import your AuthContext

function Navbar() {
  const { state, dispatch } = useAuth(); // Access the auth state from your AuthContext

  const handleLogout = () => {
    // Perform logout logic
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          HealthWallet
        </Link>
        <div className="space-x-4">
          {state.isAuthenticated ? (
            <>
              <Link to="/userprofile" className="text-white hover:underline">
                UserProfile
              </Link>
                <button className="text-white hover:underline" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white hover:underline">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
