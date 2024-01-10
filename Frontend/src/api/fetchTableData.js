import axios from 'axios';
import Cookies from 'js-cookie';

const fetchTableData = async (object , currentPage) => {
  try {
    const jwtCookie = Cookies.get('jwt');
    if (jwtCookie) {
      const response = await axios.get(`http://localhost:8000/api/admin/${object}?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      return response.data; 
    } 
  } catch (error) {
    console.error('Error checking data', error);
    throw error;
  }
};

export default fetchTableData;
