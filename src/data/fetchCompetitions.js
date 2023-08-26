// export const fetchDataFromApi = async () => {
//   try {
//     const response = await axios.get('https://golomba.gdsc-nf.web.id/api/competitions');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from API:', error);
//     throw error;
//   }
// };

export const fetchCompetitions = async (page) => {
  try {
    const response = await fetch(`https://golomba.gdsc-nf.web.id/api/competitions?page=${page}`);

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
    const response = await fetch(`https://golomba.gdsc-nf.web.id/api/competition/${id}`);

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