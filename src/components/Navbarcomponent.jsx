import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from "../assets/img/logo/logo-go-lomba.svg";
import { navLinks } from '../data/index'
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbarcomponent = () => {
  const navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);
  const [userName, setUserName] = useState(""); // State untuk menyimpan nama pengguna
  const isAuthenticated = localStorage.getItem("token") !== null;

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  const refreshPage = () => {
    navigate(0);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");

    refreshPage()
  };

  useEffect(() => {
    // Fungsi untuk mengambil nama pengguna dari API
    async function fetchUserName() {
      try {
        const response = await fetch('https://golomba.gdsc-nf.web.id/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // Sesuaikan dengan cara Anda mengelola token
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserName(data.data.username);
        } else {
          console.error('Gagal mengambil nama pengguna dari API');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil nama pengguna:', error);
      }
    }

    // Panggil fungsi fetchUserName untuk mengambil nama pengguna saat komponen dimuat
    if (isAuthenticated) {
      fetchUserName();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container className="text-center">
          <img src={Logo} alt="logo-golomba" width="40px" />
          <Navbar.Brand href="/" className="fs-3 fw-medium">
            <span className="app-brand-text demo menu-text fw-bolder ms-2 text-dark">
              GoLomba
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center me-2">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className="fw-normal">
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              {isAuthenticated ? (
                <NavDropdown title={userName || "User"} id="basic-nav-dropdown" className="text-white btn btn-danger rounded-1">
                  <NavDropdown.Item as={Link} to="/admin">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <button className="btn btn-danger rounded-1">
                    LOGIN <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarcomponent;
