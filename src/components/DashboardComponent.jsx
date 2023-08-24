import { useState } from "react";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../pages/SearchPage/index.css';

const DashboardComponent = () => {
  const [cards, setCards] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState({
    id: null,
    image: "",
    name: "",
    description: "",
    date: "",
  });

  const addCard = () => {
    setCards([...cards, cardData]);
    setCardData({
      id: null,
      image: "",
      name: "",
      description: "",
      date: "",
    });
    setShowModal(false);
  };

  const editCard = (index) => {
    setEditedIndex(index);
    setCardData(cards[index]);
    setShowModal(true);
  };

  const saveEditedCard = () => {
    const updatedCards = [...cards];
    updatedCards[editedIndex] = cardData;
    setCards(updatedCards);
    setEditedIndex(null);
    setCardData({
      id: null,
      image: "",
      name: "",
      description: "",
      date: "",
    });
    setShowModal(false);
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y my-3 ms-2">
        <Row >
          <Col className="ms-3 mb-3">
          <h2 className="text-muted fw-light">Postingan Lomba Anda</h2>
          <hr />
          </Col>
        </Row>
        <Row>
        {cards.length === 0 ? (
        <Col>
          <p className="text-center">Anda belum memposting lomba</p>
        </Col>
      ) : (
          cards.map((item, index) => (
            <Col key={item.id} sm={3} className="mb-4">
              <div className="card text-dark card-has-bg click-col"
                style={{ backgroundImage: `url(${item.image})` }}>
                <img src={item.image} className="card-img d-none" alt="..." />
                <div className="card-img-overlay d-flex flex-column">
                  <div className="card-body">
                    <small className="card-meta mb-2">Thought Leadership</small>
                    <h3 className="card-title mt-0">
                      <a href="" className="text-dark">
                        {item.name}
                      </a>
                    </h3>
                    <small><i className="far fa-clock"></i> {item.date}</small>
                  </div>
                  <div className="card-footer">
                    <p>{item.description}</p>
                  </div>
                  <div className="btn-more">
                    <Link to={`/competition/${item.id}`} className='btn btn-primary'>Lihat Selengkapnya</Link>
                  </div>
                </div>
                <div className="card-actions">
                <Button
                      variant="info"
                      className="action-button edit-button"
                      onClick={() => editCard(index)}
                    >
                      <i className="fa fa-solid fa-pen"></i>
                    </Button>
                    <Button
                      variant="danger"
                      className="action-button delete-button"
                      onClick={() => deleteCard(index)}
                    >
                      <i className="fa fa-solid fa-trash"></i>
                    </Button>
                </div>
              </div>
            </Col>
            )
          ))}

          <Col sm={3} className="mb-4">
            <div className="fixed-button-container">
              <Button
                variant="success"
                className="add-competition-button"
                onClick={() => setShowModal(true)}
              >
                <i className="fa fa-solid fa-add"></i>
              </Button>
              <span className="tooltip-text">Tambahkan Kompetisi</span>
            </div>
          </Col>
        </Row>
      </div>

      {/* Modal for adding/editing card */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editedIndex !== null ? "Edit Card" : "Add New Card"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={cardData.image}
                onChange={(e) => setCardData({ ...cardData, image: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={cardData.name}
                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={cardData.description}
                onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={cardData.date}
                onChange={(e) => setCardData({ ...cardData, date: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          {editedIndex !== null ? (
            <Button variant="primary" onClick={saveEditedCard}>
              Save Changes
            </Button>
          ) : (
            <Button variant="success" onClick={addCard}>
              Add Card
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Rest of your component code */}
    </div>
  );
};

export default DashboardComponent;
