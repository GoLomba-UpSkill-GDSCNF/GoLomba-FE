import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginImage from "../assets/img/Ilustration.png";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://golomba.gdsc-nf.web.id:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      console.log(response);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration successful!",
        });
        window.location.href = "/login";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration failed!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login py-5 w-100 min-vh-100">
      <Container>
      <Row className='mb-2'>
            <Link to={'/'} className='text-dark'>
              <i className='fa fa-chevron-left fs-3'>
              </i>
            </Link>
          </Row>
        <Row className="box d-flex align-items-center">
          <Col lg="6">
            <img src={LoginImage} alt="login.png" />
          </Col>
          <Col lg="6">
            <h2 className="login text-center fw-bold">Register</h2>
            {loading ? (
              <div className="text-center">
                <ThreeDots
                  height={80}
                  width={80}
                  radius={9}
                  color="#FF6551"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              </div>
            ) : (
              <form className="login-container" onSubmit={handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name="username"
                    required
                  />
                </p>
                <p>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                  />
                </p>
                <p>
                  <input
                    type="password"
                    placeholder="Password"
                    className="mb-5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                  />
                </p>
                <div className="text-center custom-container">
                  <button
                    className="btn btn-danger btn-lg rounded-3 mb-xs-0 mb-2 custom-button"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center">
                  <a href="#" className="custom-link">
                    or
                  </a>
                </p>
                <div className="text-center custom-container">
                  <button
                    className="btn btn-outline-danger btn-lg rounded-3 mb-xs-0 mb-3 custom-button1"
                  >
                    Sign Up with Google
                  </button>
                </div>
                <p className="text-center">
                  <Link to="/login" className="custom-link">
                    Already have an account? Sign In!
                  </Link>
                </p>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
