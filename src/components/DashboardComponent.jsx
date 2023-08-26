import { useState, useEffect } from "react";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import { formatDate } from '../data/function';
import Logo from '../assets/img/logo/logo-go-lomba.svg';
import '../pages/SearchPage/index.css';


const DashboardComponent = () => {
  const [cards, setCards] = useState([]);
  const [tags, setTags] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState({
    name: "",
    description: "",
    image: "",
    tags: [],
    education_levels: [],
    end_registration_date: "2000-01-01",
    competition_url: "",
  });

  const token = localStorage.getItem("token");


  useEffect(() => {
    // Ganti URL sesuai dengan API yang sesuai
    fetch('https://golomba.gdsc-nf.web.id/api/user/competitions', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCards(data); // Menyimpan data dari API ke dalam state cards
      })
      .catch((error) => {
        console.error('Error fetching competition data:', error);
      });
  }, [token]);

  const addCard = () => {

    const dataToSend = {
      name: cardData.name,
      description: cardData.description,
      image: cardData.image,
      tags: cardData.tags.map((tagId) => ({ "tag_id": JSON.stringify(tagId) })),
      education_levels: cardData.education_levels.map((eduLevelId) => ({ "edu-level_id": JSON.stringify(eduLevelId) })),
      end_registration_date: cardData.end_registration_date,
      competition_url: cardData.competition_url,
    };

    console.log(dataToSend);


    const token = localStorage.getItem("token");

    fetch("https://golomba.gdsc-nf.web.id/api/competition", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then(() => {
        setShowModal(false);
        setCardData({
          name: "",
          description: "",
          image: "",
          tags: [],
          education_levels: [],
          end_registration_date: "2000-01-01",
          competition_url: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const populateCardData = (card) => {
    setCardData({
      name: card.name,
      description: card.description,
      image: card.image,
      tags: card.tags.map((tag) => tag.id),
      education_levels: card.education_levels.map((eduLevel) => eduLevel.id),
      end_registration_date: card.end_registration_date,
      competition_url: card.competition_url,
    });
  };

  const editCard = (id) => {
    setSelectedCardId(id);
    const selectedCard = cards.find((card) => card.id === id);
    if (selectedCard) {
      populateCardData(selectedCard);
    }
    setShowModal(true);
  };

  console.log(cardData);

  const saveEditedCard = () => {
    const dataToSend = {
      name: cardData.name,
      description: cardData.description,
      image: cardData.image,
      tags: cardData.tags.map((tagId) => ({ "tag_id": JSON.stringify(tagId) })),
      education_levels: cardData.education_levels.map((eduLevelId) => ({ "edu-level_id": JSON.stringify(eduLevelId) })),
      end_registration_date: cardData.end_registration_date,
      competition_url: cardData.competition_url,
    };

    const token = localStorage.getItem("token");

    fetch(`https://golomba.gdsc-nf.web.id/api/competition/${selectedCardId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then(() => {
        setShowModal(false);
        setCardData({
          name: "",
          description: "",
          image: "",
          tags: [],
          education_levels: [],
          end_registration_date: "2000-01-01",
          competition_url: "",
        })
      })
      .catch((error) => {
        console.error("Error updating competition:", error);
      });
  };


  const deleteCard = (id) => {
    const token = localStorage.getItem("token");

    fetch(`https://golomba.gdsc-nf.web.id/api/competition/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(() => {
        redirect("/admin/dashboard");
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Error deleting competition:", error);
      });
  };



  useEffect(() => {
    fetch('https://golomba.gdsc-nf.web.id/api/tags')
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });

    fetch('https://golomba.gdsc-nf.web.id/api/edu-levels')
      .then((response) => response.json())
      .then((data) => {
        setEducationLevels(data);
      })
      .catch((error) => {
        console.error('Error fetching education levels:', error);
      });
  }, []);

  const handleTagChange = (tagId, checked) => {
    if (checked) {
      setCardData({ ...cardData, tags: [...cardData.tags, tagId] });
    } else {
      setCardData({ ...cardData, tags: cardData.tags.filter((id) => id !== tagId) });
    }
  };

  const handleEducationLevelChange = (eduLevelId, checked) => {
    if (checked) {
      setCardData({ ...cardData, education_levels: [...cardData.education_levels, eduLevelId] });
    } else {
      setCardData({
        ...cardData,
        education_levels: cardData.education_levels.filter((id) => id !== eduLevelId),
      });
    }
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
          {Array.isArray(cards) && cards.length === 0 ? (
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
                      <small className="card-meta mb-2 d-flex">
                        <span className='app-brand-logo demo'>
                          <img src={Logo} alt='logo-golomba' width='20px' />
                        </span>
                        <span className='app-brand-text demo menu-text fw-bolder fs-6 ms-1'>
                          GoLomba
                        </span>
                      </small>
                      <h3 className="card-title mt-0">
                        <a href="" className="text-dark">
                          {item.name}
                        </a>
                      </h3>
                      <small><i className="far fa-clock"></i> {formatDate(item.end_registration_date)}</small>
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
          <Modal.Title>{selectedCardId !== null ? "Edit Lomba" : "Add New Lomba"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={cardData.name}
                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={cardData.description}
                onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={cardData.image}
                onChange={(e) => setCardData({ ...cardData, image: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              {tags.map((tag) => (
                <Form.Check
                  key={tag.id}
                  name="tag_id"
                  type="checkbox"
                  label={tag.name}
                  checked={cardData.tags.includes(tag.id)}
                  onChange={(e) => handleTagChange(tag.id, e.target.checked)}
                  required
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Education Levels</Form.Label>
              {educationLevels.map((eduLevel) => (
                <Form.Check
                  key={eduLevel.id}
                  name="edu-level_id"
                  type="checkbox"
                  label={eduLevel.name}
                  checked={cardData.education_levels.includes(eduLevel.id)}
                  onChange={(e) => handleEducationLevelChange(eduLevel.id, e.target.checked)}
                  required
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="end_registration_date"
                value={cardData.end_registration_date}
                onChange={(e) => setCardData({ ...cardData, end_registration_date: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Competition URL</Form.Label>
              <Form.Control
                type="text"
                name="competition_url"
                value={cardData.competition_url}
                onChange={(e) => setCardData({ ...cardData, competition_url: e.target.value })}
                required
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          {selectedCardId !== null ? (
            <Button variant="primary" onClick={saveEditedCard}>
              Save Changes
            </Button>
          ) : (
            <Button variant="success" onClick={addCard}>
              Add Lomba
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Rest of your component code */}
    </div>
  );
};

export default DashboardComponent;
