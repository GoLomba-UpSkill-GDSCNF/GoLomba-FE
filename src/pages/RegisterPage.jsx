import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginImage from "../assets/img/Ilustration.png";

const RegisterPage = () => {

  return (
      <div className="login py-5 w-100 min-vh-100">
        <login>
          <Container>
            <Row className="box d-flex align-items-center">
              <Col lg="6">
                <img src={LoginImage} alt="login.png" />
              </Col>
              <Col lg="6">
                <h2 className="login text-center fw-bold">Register</h2>
                <form className="login-container">
                  <p>
                    <input type="email" placeholder="Email"></input>
                  </p>
                  <p>
                    <input type="password" placeholder="Password" className="mb-5"></input>
                  </p>
                  <div className="text-center custom-container">
                    <button className="btn btn-danger btn-lg rounded-3 mb-xs-0 mb-2 custom-button">
                      Masuk
                    </button>
                  </div>
                  <p className="text-center">
                    <a href="" className="custom-link" >Lupa kata sandi</a>
                  </p>
                  <div className="text-center custom-container">
                    <button className="btn btn-outline-danger btn-lg rounded-3 mb-xs-0 mb-3 custom-button1">
                      Sign In with Google
                    </button>
                  </div>
                  <p className="text-center">
                    <Link to="/buatakun" className="custom-link" > Belum punya akun? </Link>
                  </p>
                </form>
              </Col>
            </Row>
          </Container>
        </login>
      </div>
  )
};

export default RegisterPage;