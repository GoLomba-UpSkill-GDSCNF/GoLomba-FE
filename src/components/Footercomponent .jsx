import{Container, Row, Col} from 'react-bootstrap'
import{Link} from "react-router-dom"
  const Footercomponent  = () => {

  return (

  <div className='footer py-5'>
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col lg="5">
        <h3 className='fw-bold'>GoLomba</h3>
        <p className='ket'>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Laudantium debitis perspiciatis quo adipisci pariatur. Reiciendis cum quis aut possimus, incidunt animi similique repudiandae earum laudantium repellendus porro aperiam? Quae, minus.
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
          <p className='m-0'>krisnanovianto2@gmail.com</p>
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

