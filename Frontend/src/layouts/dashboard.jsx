// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import fetchUserData from '@/api/fetchUserData';
import { Sidenav, DashboardNavbar, Footer } from '@/widgets/layout';
import routes from '@/routes';
import routesUser from '@/routes-user';
import { useMaterialTailwindController } from '@/context';
import { Spinner } from '@material-tailwind/react';

export function Dashboard() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { isAuthenticated, user, isAdmin } = await fetchUserData();
        setUser(user);
        setIsAuthenticated(isAuthenticated);
        setIsAdmin(isAdmin);
      } catch (error) {
        // Handle error, e.g., redirect to login page
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="w-full bg-blue-gray-50/50 ml-2">
      <Sidenav
        routes={isAdmin ? routes : routesUser}
        brandImg={
          sidenavType === 'dark'
            ? '/img/logo-ct.png'
            : '/img/logo-ct-dark.png'
        }
      user={user} isAdmin={isAdmin} />
      <div className="p-4 xl:ml-60">
        <DashboardNavbar user ={user}/>
        <Routes>
          {isAdmin
            ? routes
                .filter(({ layout }) => layout === 'dashboard')
                .map(({ pages }) =>
                  pages.map(({ path, element }) => (
                    <Route
                    key={path}
                    exact
                    path={path}
                    element={React.cloneElement(element, { isAuthenticated, user, isAdmin })}
                  />))
                )
            : routesUser
                .filter(({ layout }) => layout === 'dashboard')
                .map(({ pages }) =>
                  pages.map(({ path, element }) => (
                    <Route
                    key={path}
                    exact
                    path={path}
                    element={React.cloneElement(element, { isAuthenticated, user, isAdmin })}
                  />))
                )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = '/src/layout/dashboard.jsx';

export default Dashboard;
