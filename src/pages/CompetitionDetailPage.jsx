import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { fetchCompetitionsById } from '../data/fetchCompetitions'; // Pastikan path-nya sesuai dengan struktur proyek Anda
import { formatDate } from '../data/function';
import { ThreeDots } from "react-loader-spinner";

const CompetitionDetail = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchCompetitionsById(id);
        if (apiData) {
          setCompetition(apiData); 
        } else {
          console.error(`Competition with ID ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };

    fetchData(); 
  }, [id]);

  if (Object.keys(competition).length === 0) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
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
      </div>
    )
    ;
  }

  const tagName = competition.tags.map(tag => tag.name);

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
                {tagName.map((tag, index) => (
                  <span key={index} className="btn btn-outline-dark ms-2">{tag}</span>
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
