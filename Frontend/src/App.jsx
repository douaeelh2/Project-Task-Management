import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useState, useEffect } from "react";
import { SignIn } from "./pages/auth";
import { Navigate } from "react-router-dom";
import fetchUserData from "./api/fetchUserData";

function App() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const { isAuthenticated, user, isAdmin } = await fetchUserData();
        setUser(user);
        setIsAuthenticated(isAuthenticated);
        setIsAdmin(isAdmin);

        if (!isAuthenticated) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchAuthUser();
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          isAuthenticated && isAdmin ? (
            <Dashboard
              isAuthenticated={isAuthenticated}
              user={user}
              isAdmin={isAdmin}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/user/*"
        element={
          isAuthenticated && !isAdmin ? (
            <Dashboard
              isAuthenticated={isAuthenticated}
              user={user}
              isAdmin={isAdmin}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/"
        element={
          !isAuthenticated ? (
            <SignIn />
          ) : isAdmin ? (
            <Navigate to="/admin/home" />
          ) : (
            <Navigate to="/user/tasks/table" />
          )
        }
      />
    </Routes>
  );
}

export default App;
