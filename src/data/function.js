
export const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
  
    const namaBulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
  
    const tanggal = dateTime.getDate();
    const bulan = namaBulan[dateTime.getMonth()];
    const tahun = dateTime.getFullYear();
  
    return `${tanggal} ${bulan} ${tahun}`;
  };

export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
