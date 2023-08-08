import {Navbar, Container, Nav} from "react-bootstrap";
import{useState, useEffect} from "react";

import { navLinks } from '../data/index'
import { NavLink } from "react-router-dom";

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
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">GoLomba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            

            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                    <NavLink to={link.path}>{link.text} </NavLink>
                </div>
              );

            })}
              
          
          </Nav>
          <div className="text-center">
          <button className="btn btn-outline-danger rounded-1">
            LOGIN
          </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

  );
};

export default Navbarcomponent;