import { useState, useEffect } from 'react';
import Pagination from './Pagination/Pagination';
import { Container, Row, Col } from 'react-bootstrap';
import dummyData from './Data/index';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'


const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTermFromURL = searchParams.get('search');
  const tagsFromURL = searchParams.get('tags');
  const educationLevelIdFromURL = searchParams.get('education_level_id');
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchTermFromURL || '');
  const [currentPage, setCurrentPage] = useState(1);
  const [educationLevelId, setEducationLevelId] = useState (parseInt(educationLevelIdFromURL) || '');
  const [tags, setTags] = useState(tagsFromURL || '');
  const itemsPerPage = 8;

  console.log(educationLevelId);


  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (tags === '' || item.tags.includes(tags)) &&
      (educationLevelId === '' || item.education_level_id === educationLevelId)
    );
    setFilteredData(filteredResults);
    setCurrentPage(1);

    const searchParams = new URLSearchParams();
    searchParams.append('search', searchTerm);
    searchParams.append('page', currentPage);
    searchParams.append('page_size', itemsPerPage);
    searchParams.append('edu_levels', educationLevelId);
    searchParams.append('tags', tags);

    // if (filteredResults.length === 0) {
    //   searchParams.delete('search');
    //   searchParams.delete('page');
    //   searchParams.delete('page_size');
    //   searchParams.delete('tags');
    //   searchParams.delete('edu_levels');
    // }

    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    setData(dummyData);
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section>
      <div className='py-5 w-100 min-vh-100'>
        <Container>
          <Row>
            <Col>
              <div className='input-group my-5 search-bar'>

                <div className='dropdown mt-2'>
                  <select onChange={(e) => setTags(e.target.value)} value={tags} className='form-select'>
                    <option value=''>Semua Bidang</option>
                    <option value="sciencedata">Science data</option>
                    <option value="machine learning">Machine Learning</option>
                  </select>
                </div>

                <div className='dropdown mt-2 ms-3 field'>
                  <select onChange={(e) => setEducationLevelId(e.target.value)} value={educationLevelId} className='form-select'>
                    <option value=''>Semua Jenjang</option>
                    <option value="0">SMA</option>
                    <option value="1">Perguruan Tinggi</option>
                  </select>
                </div>

                <div className="form-outline ms-5 mt-2">
                  <input
                    type="search"
                    placeholder="Cari lomba..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='form-control'
                  />
                </div>

                <button onClick={handleSearch} className='btn btn-primary ms-3 mt-2'>Cari</button>
              </div>
            </Col>
          </Row>

          <Row>
            {currentData.length > 0 ? (
            currentData.map(item => (
              <Col key={item.id} sm={3}>
                <div className="cardData">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h2>{item.name}</h2>
                      </div>
                      <div className="card-text">
                        <p>{item.description}</p>
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
            <div className="pagination-container">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                currentPage={currentPage}
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

export default Search;
