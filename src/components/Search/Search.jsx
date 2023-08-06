import { useState, useEffect } from 'react';
import Pagination from './Pagination/Pagination';
import { Container, Row, Col } from 'react-bootstrap';
import dummyData from './Data/index';
import './index.css'

const Search = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('name');
  const itemsPerPage = 8;
  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item[filterCategory].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
    setCurrentPage(1);
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

                <div className='dropdown'>
                  <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory} className='form-select'>
                    <option value="name">Semua Bidang</option>
                    <option value="description">Sekolah</option>
                  </select>
                </div>
                <div className='dropdown ms-3'>
                  <select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory} className='form-select'>
                    <option value="name">Semua Jenjang</option>
                    <option value="description">Deskripsi</option>
                  </select>
                </div>

                <div className="form-outline ms-5">
                  <input
                    type="search"
                    placeholder="Cari data..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='form-control'
                  />
                </div>

                <button onClick={handleSearch} className='btn btn-primary ms-3'>Cari Lomba</button>
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
