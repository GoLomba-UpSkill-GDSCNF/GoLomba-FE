import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { fetchDataFromApi } from '../data/fetchDataFromApi';
import { formatDate } from '../data/function';

const CompetitionDetail = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState({});

  useEffect(() => {
    fetchDataFromApi()
      .then(apiData => {
        setCompetition(apiData.rows);
        const selectedCompetition = apiData.rows.find(item => item.id === parseInt(id));

        if (selectedCompetition) {
          setCompetition(selectedCompetition);
        } else {
          console.error(`Competition with ID ${id} not found.`);
        }
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, [id]);

  if (Object.keys(competition).length === 0) {
    return <p>Loading...</p>;
  }

  const tagName = competition.tags.map(tag => tag.name);
  console.log("ini tagname" + tagName);


  return (
    <div>
      <section className='py-2'>
        <Container className='px-4 px-lg-5 my-5'>
          <Row className='mb-3'>
            <Link to={'/search'} className='text-dark'>
              <i className='fa fa-chevron-left'>
                <span className='ms-2'>Back</span>
              </i>
            </Link>
          </Row>
          <Row className='gx-4 gx-lg-5 align-items-center p-5 detail-content'>
            <Col md={6} className='text-center'>
              <img src={competition.image} alt="competition-image" className='card-img-top w-50 mb-5 mb-md-0' />
            </Col>
            <Col md={6}>
              <h1 className="display-6 fw-bolder">{competition.name}</h1>
              <div className="fs-5 my-4">
                {competition.tags?.map((tag, index) => (
                  <span key={index} className="btn btn-outline-dark ms-2">{tag.name}</span>
                ))}
              </div>
              <hr />
              <div className="content-detail">
                <h6 className='fw-bold'>Batas Pendaftaran</h6>
                <i className='fa fa-solid fa-calendar-days'></i>
                <span className='ms-3'>{formatDate(competition.end_registration_date)}</span>
                <h6 className='mt-3 fw-bold d-flex flex-row mb-2'>Jenjang Pendidikan</h6>
                <i className='fa fa-solid fa-school'></i>
                <div className="d-inline-block">
                  <ul className="d-flex gap-5 ms-2">
                    {competition.education_levels.map((level, index) => (
                      <li key={index}>{level.name}</li>
                    ))}
                  </ul>
                </div>

                <h6 className='mt-2 fw-bold'>Deskripsi</h6>
                <p>{competition.description}</p>
              </div>
              <div className="d-flex mt-5">
                <Link to={competition.competition_url} className="btn flex-shrink-0 btn-daftar w-100">
                  <i className="bi-cart-fill me-1"></i>
                  Daftar Sekarang
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CompetitionDetail;

