import axios from 'axios';
import Cookies from 'js-cookie';

const fetchUserData = async () => {
  try {
    const jwtCookie = Cookies.get('jwt');
    if (jwtCookie) {
      const response = await axios.get('http://localhost:8000/api/user', {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const userData = response.data;

      return {
        isAuthenticated: true,
        user: userData,
        isAdmin: userData && userData.role === 'admin',
      };
    } else {
      return {
        isAuthenticated: false,
        user: null,
        isAdmin: false,
      };
    }
  } catch (error) {
    console.error('Error checking authentication', error);
    throw error;
  }
};

export default fetchUserData;
