import{Container, Row, Col} from 'react-bootstrap'
import{Link} from "react-router-dom"

import Logo from '../assets/img/logo/logo-go-lomba.svg';
  const Footercomponent  = () => {

  return (

  <div className='footer py-5 mt-5'>
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col lg="5">
          <div className="d-flex mb-3">
        <span className="app-brand-logo demo me-2">
          <img src={Logo} alt="logo-golomba" width="40px"/>
          </span>
        <span className="app-brand-text demo menu-text fw-bolder ms-2 text-dark">GoLomba</span>
          </div>
        <p className='ket'>Golomba adalah sebuah platform yang didedikasikan untuk membantu pelajar mengembangkan minat dan bakat mereka melalui berbagai kompetisi dan lomba.
        </p>
        <div className='simbol mb-1 mt-2'>
          <Link className='text-decoration-none'>
          <i className='fa-brands fa-whatsapp'></i>
          <p className='m-0'>+628 569-326-8828</p>
          </Link>
        </div>

        <div className='simbol mt-2'>
          <Link className='text-decoration-none'>
          <i className='fa-regular fa-envelope'></i>
          <p className='m-0'>golomba@email.com</p>
          </Link>
        </div>

        

        </Col>
        <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
        <h5 className='fw-bold'>Menu</h5>
        <Link to="">Home</Link>
        <Link to="search">Cari Lomba</Link>
        <Link to="about">About</Link>
        <Link to="testimonials">Testimonials</Link>
        <Link to="faq">FAQ</Link>
        </Col>

      
        <Col lg-5>
        <div className='sosial mt-lg-0 mt-5'>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-linkedin'></i>
        </div>
        </Col>
      </Row>
      <Row>
      <Col>
      <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'> Kelompok 2 </span>
      All Right Reserved</p>
      </Col>
      </Row>
    </Container>
  </div>
  );
   
};

export default Footercomponent;
