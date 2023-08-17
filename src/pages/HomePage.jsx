import {Container, Row, Col} from "react-bootstrap";
import HeroImage from "../assets/img/utama.png" ;
import AboutImage from "../assets/img/about.png" ;
import LoginImage from "../assets/img/login.png" ;
import { Link } from 'react-router-dom';



// Menginput data Lomba 
import{kelasTerbaru} from "../data/index";

// Membuat fungsi navigate
import {useNavigate} from "react-router-dom";
import buatakun from "../components/buatakun";

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

    <div className="about" py-5>
    <Container>
      <Row className="about-box d-flex align-items-center">
        <Col lg="6">
        <img src={AboutImage} alt="about.png" />
        </Col>

        <Col lg="6" style={{ padding: '50px' }}>
          
          <h1 className="mb-2"><span>Mengapa </span><br></br> harus berprestasi?</h1><br></br>
          <p>
          Prestasi memiliki dampak signifikan dalam menggambarkan dedikasi dan kemampuan individu. Melalui usaha dan ketekunan, prestasi menciptakan bukti konkret tentang pencapaian seseorang dalam berbagai bidang, baik akademis maupun profesional. Prestasi tidak hanya membangkitkan rasa percaya diri, tetapi juga membuka pintu peluang dalam lingkungan yang kompetitif.
          </p>
          <p>
          Namun, penting untuk diingat bahwa prestasi tidaklah satu-satunya penentu keberhasilan atau kebahagiaan. Hubungan sosial yang kuat, keseimbangan hidup, serta pencarian makna dalam aktivitas sehari-hari juga berperan krusial dalam membentuk kualitas hidup yang seimbang dan memuaskan. Prestasi dapat menjadi sumber inspirasi dan pendorong menuju tujuan, tetapi harus diimbangi dengan elemen-elemen lain yang juga penting bagi kesejahteraan secara menyeluruh. 
          </p>
    

        </Col>
      </Row>
    </Container>
  </div>

  <div className="login py-5">
  <login>
    <Container>
        <Row className="box d-flex align-items-center">
        <Col  lg="6">
        <img src={LoginImage} alt="login.png" />
        </Col>
        
        <Col lg="6">
          <h2 className="login text-center fw-bold">Login</h2>
          <form className="login-container">
            <p>
                <input type="email" placeholder="Email"></input>
            </p>
            <p>
                <input type="password" placeholder="Password" class="mb-5"></input>
            </p>

            <div class="text-center custom-container">

            <button className="btn btn-danger btn-lg rounded-3 mb-xs-0 mb-2 custom-button">
            Masuk
            </button>

            </div>
      

            <p align="center">
               <a href="" class="custom-link" >Lupa kata sandi</a>
            </p>

          <div class="text-center custom-container">

          <button className="btn btn-outline-danger btn-lg rounded-3 mb-xs-0 mb-3 custom-button1">
          Sign In with Google
          </button>

          </div>

          <p align="center">
          <Link to="/buatakun" class="custom-link" > Belum punya akun? </Link>
          </p>




          </form>
        </Col>
        
      </Row>
    </Container>
    </login>
  </div>
    


    
  </div>
  
  );  
};

export default HomePage;
