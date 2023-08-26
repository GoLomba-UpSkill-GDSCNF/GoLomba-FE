import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import LoginImage from "../assets/img/Ilustration.png";
import Swal from 'sweetalert2'
import { ThreeDots } from "react-loader-spinner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMxNDcwNzAsImlkIjoxLCJyb2xlIjoxfQ.CIBOir5xtDICqUvxP17Rc-KaUJGqjaw7k7id8DcxFBw";

    try {
      const response = await fetch("https://golomba.gdsc-nf.web.id/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(response)
      console.log(response.ok)

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.data.token;
        localStorage.setItem("token", token);
        redirect("/admin/dashboard");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or Password Incorrect!',
        })
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
        <Row className='my-3'>
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
            <h2 className="login text-center fw-bold">Welcome Back!</h2>
            {loading ? (
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#FF6551"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              <form className="login-container" onSubmit={handleSubmit}>
                <p>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                  />
                </p>
                <div className="text-center custom-container">
                  <button className="btn btn-danger btn-lg rounded-3 mb-xs-0 mb-2 custom-button" type="submit">
                    Sign In
                  </button>
                </div>
                <p className="text-center">
                  <a href="" className="custom-link">
                    Or
                  </a>
                </p>
                <div className="text-center custom-container">
                  <button className="btn btn-outline-danger btn-lg rounded-3 mb-xs-0 mb-3 custom-button1">
                    Sign In with Google
                  </button>
                </div>
                <p className="text-center">
                  <Link to="/register" className="custom-link">
                    Don`t have an account? Sign Up!
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

export default LoginPage;
