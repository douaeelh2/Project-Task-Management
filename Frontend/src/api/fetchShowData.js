import axios from 'axios';
import Cookies from 'js-cookie';

const fetchShowData = async (id , object) => {
  try {
    const jwtCookie = Cookies.get('jwt');
    if (jwtCookie) {
      const response = await axios.get(`http://localhost:8000/api/admin/${object}/show/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      return response.data; 
    } 
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};

export default fetchShowData;
