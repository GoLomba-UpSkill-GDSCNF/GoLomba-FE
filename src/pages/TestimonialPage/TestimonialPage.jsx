import { useState, useEffect } from 'react';
import { testimoni } from '../../data/index';
import styles from './testimonial.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(testimoni);
    }, []);

    return (
        <section id='testimonial'>
                <div className='testimonial-section w-100 min-vh-100'>
                    <Container>
                        <Row>
                            <Col>
                                <div className={styles.contaner}>
                                    <h2 className={styles.text1}>Apa Kata Mereka?</h2>
                                    <p className={styles.text1}>Kami percaya bahwa setiap informasi yang kami berikan dapat menjadi langkah awal menuju prestasi luar biasa, dan testimoni dari pengguna kami adalah bukti bahwa kami memberikan nilai tambah yang nyata.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className={styles.cardcontainer}>
                            {data.map(testimonial => (
                                <Col key={testimonial.id}>
                                    <div className={styles.card}>
                                        <div className={styles.photo}>
                                            <img src={testimonial.image} alt="testi1" />   
                                        </div>
                                        <div className={styles.testi}>
                                            <div className={styles.p1}>{testimonial.message}</div>
                                            <div className={styles.rating}>
                                                <i className={testimonial.star1}></i>
                                                <i className={testimonial.star2}></i>
                                                <i className={testimonial.star3}></i>
                                                <i className={testimonial.star4}></i>
                                                <i className={testimonial.star5}></i>
                                            </div>
                                            <p className={styles.p2}>{testimonial.name}</p>
                                            <p  className={styles.p3}>{testimonial.from}</p>
                                        </div>
                                    </div>
                                </Col>
                                ))}
                            </div>
                        </Row>
                    </Container>
                </div>
                </section>
    );
};

export default TestimonialPage;