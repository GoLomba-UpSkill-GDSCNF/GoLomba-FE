import { NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const NavbarComponent = () => {
  const [userName, setUserName] = useState("Nama Pengguna");
  const isAuthenticated = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    // Fungsi untuk mengambil nama pengguna dari API
    async function fetchUserName() {
      try {
        const response = await fetch('http://golomba.gdsc-nf.web.id:3000/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // Anda mungkin perlu menambahkan token di sini
          },
        });

        if (response.ok) {
          const data = await response.json();
          const { username } = data.data;
          setUserName(username);
        } else {
          console.error('Gagal mengambil nama pengguna dari API');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil nama pengguna:', error);
      }
    }

    // Panggil fungsi fetchUserName untuk mengambil nama pengguna saat komponen dimuat
    fetchUserName();
  }, []); 

  return (
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      {/* ... Navbar toggle and search input */}
      
      <div className='navbar-nav-right d-flex align-items-center' id="navbar-collapse">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="fa fa-solid fa-bars"></i>
          </a>
        </div>
        {/* <!-- Search --> */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="fa-solid fa-magnifying-glass fa-lg me-3"></i>
            <input
              type="text"
              className="form-control border-1 shadow-none bg-transparent"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* <!-- /Search --> */}
        
        <ul className="navbar-nav flex-row align-items-center ms-auto">
         {/* User Dropdown */}
         <NavDropdown title={"Hallo! "+ userName} id="userDropdown" align="end">
            {isAuthenticated && (
              <>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
