import axios from 'axios';

export const fetchDataFromApi = async () => {
  try {
    const response = await axios.get('http://golomba.gdsc-nf.web.id:3000/competitions');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

