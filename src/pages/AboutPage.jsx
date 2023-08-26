import { Container, Row, Col, Card } from 'react-bootstrap';
import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Logo from "../assets/img/logo/logo-go-lomba.svg";
import AvatarAldi from "../assets/img/aldi.jpg";
import AvatarRaihan from "../assets/img/raihan.jpg";
import AvatarKrisna from "../assets/img/krisna.jpg";
import DefaultAvatar from "../assets/img/default-avatar.png";

const AboutPage = () => {

    const teamMembers = [
        {
            name: 'Muhamad Aldi Ramdani',
            description: 'Frontend Team',
            imageUrl: AvatarAldi
        },
        {
            name: 'Krisna Novianto',
            description: 'Frontend Team',
            imageUrl: AvatarKrisna
        },
        {
            name: 'Syafina',
            description: 'Frontend Team',
            imageUrl: DefaultAvatar
        },
        {
            name: 'Muhammad Raihan',
            description: 'Backend Team',
            imageUrl: AvatarRaihan
        },
        {
            name: 'Fazri Egi Ramadhan',
            description: 'Backend Team',
            imageUrl: DefaultAvatar
        }
    ];

    return (
        <section id='about'>
            <div className="about-page">
                <Container>
                    <Row className='py-5'>
                        <Col>
                            <h1 className='text-center fw-bold'>About Us</h1>
                        </Col>
                    </Row>
                    <Row className="about-box d-flex align-items-center">
                        <Col lg="6" style={{ textAlign: 'justify' }}>
                            <p>
                                Selamat datang di GoLomba! Kami adalah sebuah platform yang didedikasikan untuk membantu pelajar mengembangkan minat dan bakat mereka melalui berbagai kompetisi dan lomba.
                            </p>
                            <p>
                                Kami percaya bahwa setiap individu memiliki potensi yang luar biasa, dan melalui partisipasi dalam kompetisi, pelajar dapat mengasah keterampilan mereka, membangun percaya diri, dan menggali passion yang mendalam.
                            </p>
                            <p>
                                Tim GoLomba terdiri dari individu yang antusias dalam pendidikan dan pengembangan diri. Kami berkomitmen untuk menyediakan informasi terbaru tentang lomba dan kompetisi di berbagai bidang, mulai dari sains, seni, olahraga, dan masih banyak lagi.
                            </p>
                            <p>
                                Jika Anda memiliki pertanyaan atau ingin berkontribusi, jangan ragu untuk menghubungi kami. Terima kasih telah memilih GoLomba sebagai mitra dalam perjalanan pengembangan diri Anda!
                            </p>
                        </Col>
                        <Col lg="6">
                            <div className="about-image d-flex justify-content-center ">
                                <span className="app-brand-logo demo">
                                    <img src={Logo} alt="logo-golomba" width="100px" />
                                </span>
                                <span className="app-brand-text demo menu-text fw-bolder ms-2 text-dark" style={{ fontSize: '4rem' }}>GoLomba</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5 text-center">
                        <Col>
                            <h2 className="fw-bold mb-5">Meet Our Team</h2>
                        </Col>
                    </Row>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        pagination={true}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <Row className="justify-content-center">
                                    <Col lg="4">
                                        <Card className="team-card">
                                            <Card.Img variant="top" src={member.imageUrl} className='avatar-image' />
                                            <Card.Body>
                                                <Card.Title className='text-center'>{member.name}</Card.Title>
                                                <Card.Text className='text-center'>{member.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </div>
        </section>
    );
};

export default AboutPage;
