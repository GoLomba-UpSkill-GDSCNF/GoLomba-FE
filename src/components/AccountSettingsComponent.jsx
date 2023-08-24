import { Container, Col, Row, Button, Form } from "react-bootstrap";

const AccountSettingsComponent = () => {
  return (
    <div className="content-wrapper py-3">
      <div className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col>
          <h3 className="text-muted fw-light ms-4 mb-5">Account Settings</h3>
          </Col>
        </Row>
        <Row>
          <Col className="mx-3">
          <Container className="custom-card">
            <h5 className="card-header">Profile Details</h5>
            <hr className="my-0" />
            <div className="card-body">
              <Row className="align-items-start align-items-sm-center gap-4">
                <Col className="">
                  .image-wrapper
                  <img
                    src="../assets/img/avatars/1.png"
                    alt="user-avatar"
                    className="d-block rounded"
                    height="100"
                    width="100"
                    id="uploadedAvatar"
                  />
                  <div className="button-wrapper">
                    <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex="0">
                      <span className="d-none d-sm-block">Upload new photo</span>
                      <i className="bx bx-upload d-block d-sm-none"></i>
                      <input
                        type="file"
                        id="upload"
                        className="account-file-input"
                        hidden
                        accept="image/png, image/jpeg"
                      />
                    </label>
                    <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                      <i className="bx bx-reset d-block d-sm-none"></i>
                      <span className="d-none d-sm-block">Reset</span>
                    </button>

                    <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </Col>
              </Row>
            </div>
            <hr className="my-0" />
            <div className="card-body">
              <Form id="formAccountSettings" onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" value="John" autoFocus />
                    </Form.Group>
                  </Col>
                  {/* Other form groups */}
                </Row>
                {/* Other form groups */}
                <div className="mt-2">
                  <Button variant="primary" className="me-2" type="submit">
                    Save changes
                  </Button>
                  <Button variant="outline-secondary" type="reset">
                    Cancel
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
