import { Routes, Route , useNavigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useState, useEffect } from "react";
import { SignIn } from "./pages/auth";
import fetchUserData from "./api/fetchUserData";


function App() {

  const navigate = useNavigate(); 

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserDataAsync = async () => {
      try {
        const { isAuthenticated, user, isAdmin } = await fetchUserData();
        setUser(user);
        console.log("user" + user.role);
        setIsAuthenticated(isAuthenticated);
        setIsAdmin(isAdmin);

        if (!isAuthenticated) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserDataAsync();
  }, [navigate]);

 

  return (
    <Routes>
      {isAuthenticated && isAdmin ?  (
        <Route path="/admin/*" element={<Dashboard isAuthenticated={isAuthenticated} user={user} isAdmin={isAdmin} />}
      />
      ) 
      : isAuthenticated && !isAdmin ?  (
        <Route path="/user/*" element={<Dashboard isAuthenticated={isAuthenticated} user={user} isAdmin={isAdmin} />} 
      />
      ) 
      : (
        <Route path="/" element={<SignIn/>} />
      )}
    </Routes>
  );
}

export default App;
