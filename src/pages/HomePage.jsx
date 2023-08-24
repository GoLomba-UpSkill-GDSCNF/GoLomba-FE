import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/utama.png";
import SearchPage from "./SearchPage/SearchPage";
import TestimonialPage from "./TestimonialPage/TestimonialPage";
import Typewriter from "typewriter-effect";
import ArticleComponent from "../components/ArticleComponent";
import AboutPage from "./AboutPage"


const HomePage = () => {


  // Menjalankan function dari Navigate yang diimport
  // let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                  Sat set,
                   <Typewriter
                    options={{
                      strings: ['Beraksi!', 'Berkreasi!', 'Berprestasi!'],
                      autoStart: true,
                      loop: true,
                    }}
                    />
                    <br />
                  Punya prestasi? udah gak perlu halusinasi lagi!
              </h1>
              <h3 className="mb-4">Mari berprestasi bersama kami!</h3>
              <a href="#search-page" className="btn btn-danger btn-lg rounded-3 me-4 mb-xs-0">Mulai Eksplorasi</a>
              <i className="fa fa-chevron-right fa-fade fa-xl text-white"></i>
            </Col>

            <Col lg="6" className="text-center">
              <img src={HeroImage} alt="utama.png" className="ms-3" />
            </Col>
          </Row>
        </Container>
      </header>

      <SearchPage />

      <ArticleComponent />

      <TestimonialPage />

      <AboutPage />

    </div>

  );
};

export default HomePage;
