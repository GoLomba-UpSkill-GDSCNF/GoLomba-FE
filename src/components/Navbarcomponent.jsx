import {Navbar, Container, Nav} from "react-bootstrap";
import{useState, useEffect} from "react";
import Logo from "../assets/img/logo/logo-go-lomba.svg";
import { navLinks } from '../data/index'
import { NavLink, Link } from "react-router-dom";

const Navbarcomponent = () => {

  const [changeColor, setChangeColor] = useState(false);

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
});



  return (
  <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""} >
      <Container className="text-center">
          <img src={Logo} alt="logo-golomba" width="40px"/>
        <Navbar.Brand href="/" className="fs-3 fw-medium">
          <span className="app-brand-text demo menu-text fw-bolder ms-2 text-dark">
          GoLomba
          </span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center me-2">
            

            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className="fw-normal">{link.text} </NavLink>
                </div>
              );

            })}
              
          
          </Nav>
          <div className="text-center">
          <Link to="/login">
          <button className="btn btn-danger rounded-1">
            LOGIN
            <i className="fa fa-arrow-right ms-2"></i>
          </button>
          </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  );
};

export default Navbarcomponent;