import { Container, Row, Col } from 'react-bootstrap';
import ArticleImage from "../assets/img/article.png" ;

const ArticleComponent = () => {
    return (
    <section id="article">
          <div className="article w-100" >
      <Container className='article-container'>
        <Row className="about-box d-flex align-items-center">
          <Col lg="6">
          <img src={ArticleImage} alt="article.png" className='w-100' />
          </Col>
          <Col lg="6" className="">
            <div className="article-content">
            <h1 className='article-title me-3'>Mengapa <br /> harus <span className='text-span'>berprestasi?</span></h1>

            <div className="article-text mx-3">
            <p>
            Prestasi memiliki dampak signifikan dalam menggambarkan dedikasi dan kemampuan individu. Melalui usaha dan ketekunan, prestasi menciptakan bukti konkret tentang pencapaian seseorang dalam berbagai bidang, baik akademis maupun profesional. Prestasi tidak hanya membangkitkan rasa percaya diri, tetapi juga membuka pintu peluang dalam lingkungan yang kompetitif.
            </p>
            <p>
            Namun, penting untuk diingat bahwa prestasi tidaklah satu-satunya penentu keberhasilan atau kebahagiaan. Hubungan sosial yang kuat, keseimbangan hidup, serta pencarian makna dalam aktivitas sehari-hari juga berperan krusial dalam membentuk kualitas hidup yang seimbang dan memuaskan. Prestasi dapat menjadi sumber inspirasi dan pendorong menuju tujuan, tetapi harus diimbangi dengan elemen-elemen lain yang juga penting bagi kesejahteraan secara menyeluruh. 
            </p>

            </div>
            </div>
          </Col>
        </Row>
      </Container>

    </div>

    </section>
    )};
  
export default ArticleComponent;