import { useState, useEffect } from 'react';
import Paginationcomponent from '../../components/Paginationcomponent/Paginationcomponent';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchCompetitions } from '../../data/fetchCompetitions';
import { formatDate } from '../../data/function';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/logo-go-lomba.svg';
import './index.css';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTermFromURL = searchParams.get('search');
  const tagsFromURL = searchParams.get('tags');
  const educationLevelIdFromURL = searchParams.get('education_levels');
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchTermFromURL || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [educationLevelId, setEducationLevelId] = useState(
    parseInt(educationLevelIdFromURL) || ''
  );
  const [tags, setTags] = useState(tagsFromURL || '');
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  // const [totalData, setTotalData] = useState(0);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setCurrentPage(1);

    const searchParams = new URLSearchParams();
    searchParams.append('search', searchTerm);
    searchParams.append('tags', tags);
    searchParams.append('education_levels', educationLevelId);
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    fetchCompetitions(currentPage)
      .then(apiData => {
        setData(apiData.rows);
        setTotalPages(apiData.total_pages);
        setItemsPerPage(apiData.limit);
        // setTotalData(apiData.total_data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, [currentPage]);


  const currentData = data
  ? data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (tags === '' || (item.tags && item.tags.map((tag) => tag.name).includes(tags))) &&
      (educationLevelId === '' ||
        (item.education_levels && item.education_levels.map((level) => level.name).includes(educationLevelId)))
    )
  : [];

  console.log(currentData)

  return (
    <section id='search-page'>
      <div className='py-5 w-100 min-vh-100'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Cari Lomba</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className=' my-5 search-bar'>
                <div className='dropdown mt-2'>
                  <select
                    onChange={(e) => setTags(e.target.value)}
                    value={tags}
                    className='form-select'
                  >
                    <option value=''>Semua Bidang</option>
                    {currentData ? (
                      currentData.length > 0 ? (
                        [...new Set(
                          currentData
                            .filter(item => item.tags && item.tags.length) // Filter item yang memiliki tags
                            .map((item) => item.tags.map((tag) => tag.name)).flat()
                        )].map((tag, index) => (
                          <option key={index} value={tag}>
                            {tag}
                          </option>
                        ))
                      ) : (
                        <option value=''>Loading...</option>
                      )
                    ) : null}
                  </select>
                </div>

                <div className='dropdown mt-2 ms-3'>
                  <select
                    onChange={(e) => setEducationLevelId(e.target.value)}
                    value={educationLevelId}
                    className='form-select'
                  >
                    <option value=''>Semua Jenjang</option>
                    {currentData ? (
                      currentData.length > 0 ? (
                        [...new Set(
                          currentData
                            .filter(item => item.education_levels && item.education_levels.length) // Filter item yang memiliki education_levels
                            .map((item) => item.education_levels.map((edu_levels) => edu_levels.name)).flat()
                        )].map((edu_levels, index) => (
                          <option key={index} value={edu_levels}>
                            {edu_levels}
                          </option>
                        ))
                      ) : (
                        <option value=''>Loading...</option>
                      )
                    ) : null}
                  </select>
                </div>

                <div className='form-outline ms-5 mt-2'>
                  <input
                    type='search'
                    placeholder='Cari lomba...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='form-control'
                  />
                </div>

                <button onClick={handleSearch} className='btn btn-primary ms-3 mt-2 '>
                  Cari
                </button>
              </div>
            </Col>
          </Row>

          <Row className='card-competition'>
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <Col key={item.id} sm={3}>
                  <div className=''>
                    <div
                      className='card text-dark card-has-bg click-col'
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <img src={item.image} className='card-img d-none' alt='...' />
                      <div className='card-img-overlay d-flex flex-column'>
                        <div className='card-body'>
                          <small className='card-meta mb-2 d-flex'>
                            <span className='app-brand-logo demo'>
                              <img src={Logo} alt='logo-golomba' width='20px' />
                            </span>
                            <span className='app-brand-text demo menu-text fw-bolder fs-6 ms-1'>
                              GoLomba
                            </span>
                          </small>
                          <h3 className='card-title mt-0'>
                            <a href='' className='text-dark'>
                              {item.name}
                            </a>
                          </h3>
                          <small>
                            <i className='far fa-clock'></i> {formatDate(item.end_registration_date)}
                          </small>
                        </div>
                        <div className='card-footer'>
                          <p>{item.description}</p>
                        </div>
                        <div className='btn-more'>
                          <Link to={`/competition/${item.id}`} className='btn btn-primary'>
                            Lihat Selengkapnya
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p className='text-center'>Maaf, data tidak ditemukan</p>
            )}
          </Row>

          <Row>
            <Col>
              <div className='pagination-container'>
                <Paginationcomponent
                  itemsPerPage={itemsPerPage}
                  totalItems={currentData.length}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default SearchPage;
