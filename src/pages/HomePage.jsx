import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/utama.png" ;


// Menginput data Lomba 
import{kelasTerbaru} from "../data/index";

// Membuat fungsi navigate
import {useNavigate} from "react-router-dom";

const HomePage = () => {

  // Menjalankan function dari Navigate yang diimport
  let navigate = useNavigate();


  return (
  <div className="homepage">
    <header className="w-100 min-vh-100 d-flex align-items-center">
    <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
          <h1 className="mb-4">
            Udah gak <span>good looking</span> <br/>  gak punya prestasi
          </h1>
          <h3 className="mb-4">sekarang saatnya kamu ikut lomba !</h3>
          <button className="btn btn-danger btn-lg rounded-3 me-4 mb-xs-0 mb-2" onClick={ () => navigate("/login")}>Daftar Sekarang</button>
          <button className="btn btn-outline-danger btn-lg rounded-3 mb-xs-0 mb-2">Tanya Dulu</button>
          </Col>

          <Col lg="6">
          <img src={HeroImage} alt="utama.png" />
          </Col>
        </Row>
      </Container>
    </header>

    <div className="lomba w-100 min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold">Kelas Terbaru</h1>
            <p className="text-center fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </Col>
        </Row>

        <Row>
          {kelasTerbaru.map((kelas) => {
            return <Col key={kelas.id}>
              <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded" />
              <div className="star mb-2 px-3">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
              </div>
              <h5 className="mb-5 px-3">{kelas.title}</h5>
              <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                <p className="m-0 text-primary fw-bold">{kelas.deskripsi}</p>
                <button className="btn btn-danger rounded-1">{kelas.daftar}</button>
              </div>
            </Col>

          })}
          
        </Row>

        <Row>
          <Col className="text-center">
          <button className="btn btn-outline-danger rounded-3 btn-lg" onClick={() => navigate("/search")} >Lihat Semua Lomba
          <i className="fa-solid fa-chevron-right ms-1"></i>
          </button>
          </Col>
        </Row>

      </Container>
    </div>
    
  </div>
  
  );  
};

export default HomePage;
