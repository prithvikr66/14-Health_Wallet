import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../hooks/AuthContext";

const AppLayout = () => {
  const { state } = useAuth(); // Access the auth state from your AuthContext
  console.log(state);
  return state.isAuthenticated ? <Navigate to="/landing" /> : <Outlet />;
};

export default AppLayout;
