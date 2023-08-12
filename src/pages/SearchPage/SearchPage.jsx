import { useState, useEffect } from 'react';
import Paginationcomponent from '../../components/Paginationcomponent/Paginationcomponent';
import { Container, Row, Col } from 'react-bootstrap';
import { dummyData } from '../../data/index';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';


const SearchPage = () => {
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
    const [educationLevelId, setEducationLevelId] = useState(parseInt(educationLevelIdFromURL) || '');
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
        <section className='search-page'>
            <div className='py-5 w-100 min-vh-100'>
                <Container>
                    <Row>
                        <Col>
                            <div className='input-group my-5 search-bar'>

                                <div className='dropdown mt-2'>
                                    <select onChange={(e) => setTags(e.target.value)} value={tags} className='form-select'>
                                        <option value=''>Semua Bidang</option>
                                        <option value="science data">Science data</option>
                                        <option value="machine learning">Machine Learning</option>
                                    </select>
                                </div>

                                <div className='dropdown mt-2 ms-3'>
                                    <select onChange={(e) => setEducationLevelId(e.target.value)} value={educationLevelId} className='form-select'>
                                        <option value=''>Semua Jenjang</option>
                                        <option value="SD">SD</option>
                                        <option value="SMP">SMP</option>
                                        <option value="SMA">SMA</option>
                                        <option value="Perguruan_Tinggi">Perguruan Tinggi</option>
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

                                <button onClick={handleSearch} className='btn btn-primary ms-3 mt-2 '>Cari</button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        {currentData.length > 0 ? (
                            currentData.map(item => (
                                <Col key={item.id} sm={3}>
                                    <div className="cardData">
                                        <div className="card card-container">
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="card-title text-center">
                                                    <h3>{item.name}</h3>
                                                </div>
                                                <div className="card-text text-center">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="btn-more">
                                                    <a href='' className='btn btn-primary'>Lihat Selengkapnya</a>
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
                                <Paginationcomponent
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

export default SearchPage;
