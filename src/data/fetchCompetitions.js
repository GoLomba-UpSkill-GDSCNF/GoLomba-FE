
// export const fetchDataFromApi = async () => {
//   try {
//     const response = await axios.get('http://golomba.gdsc-nf.web.id:3000/competitions');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     throw error;
//   }
// };

export const fetchCompetitions = async (page) => {
  try {
    const response = await fetch(`http://golomba.gdsc-nf.web.id:3000/competitions?page=${page}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; 
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
export const fetchCompetitionsById = async (id) => {
  try {
    const response = await fetch(`http://golomba.gdsc-nf.web.id:3000/competition/${id}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data)
    return data; 
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}






