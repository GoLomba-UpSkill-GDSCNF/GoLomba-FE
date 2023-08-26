import { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Form } from "react-bootstrap";

const AccountSettingsComponent = () => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch('http://golomba.gdsc-nf.web.id:3000/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // Sesuaikan dengan cara Anda mengelola token
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data.data);
        } else {
          console.error('Gagal mengambil informasi pengguna dari API');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil informasi pengguna:', error);
      }
    }

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="content-wrapper py-3">
      <div className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col>
            <h3 className="text-muted fw-light ms-4 mb-5">Account</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mx-3">
            <Container className="custom-card">
              <h5 className="card-header py-2 mb-2">Profile Details</h5>
              <hr className="my-0" />
              <div className="card-body">
                <Row className="align-items-start align-items-sm-center gap-4">
                  <Col className=" my-3 py-2">
                    <h6>Username: {userInfo.username}</h6>
                    <h6>Email: {userInfo.email}</h6>
                    <h6>Role: {userInfo.role?.name}</h6>
                  </Col>
                </Row>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <Form id="formAccountSettings" onSubmit={(e) => e.preventDefault()}>
                  <div className="mt-2">
                    <Button variant="primary" className="me-2 mt-2" onClick={handleLogout}>
                      Log-Out
                    </Button>
                  </div>
                </Form>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
      <div className="content-backdrop fade"></div>
    </div>
  );
};

export default AccountSettingsComponent;
