import axios from 'axios';
import Cookies from 'js-cookie';

const CreateData = async (Data , Object) => {
  try {
    const jwtCookie = Cookies.get('jwt');
    if (jwtCookie) {
      const response = await axios.post(`http://localhost:8000/api/admin/${Object}/create`, Data, {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    }
  } catch (error) {
    console.error('Error creating user', error);
    throw error;
  }
};

export default CreateData;
