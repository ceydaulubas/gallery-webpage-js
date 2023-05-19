import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid className="px-0">
                <Row className="justify-content-between py-5 px-4">
                    <Col xs={12} md={2} className="px-md-2">
                        <h5>HAKKIMIZDA</h5>
                        <ul>
                            <li>Galeri Hakkinda</li>
                            <li>Ziyaret Kurallari</li>
                            <li>Bizi Desteklemek Isteyenler Icin</li>
                        </ul>
                    </Col>

                    <Col xs={12} md={2} className="px-md-4">
                        <h5>WEB SITEMIZ</h5>
                        <ul>
                            <li>Online Bilet Al</li>
                            <li>Magaza</li>
                            <li>Kolleksiyonlar</li>
                        </ul>
                    </Col>

                    <Col xs={12} md={2} className="px-md-4">
                        <h5>CONTACT</h5>
                        <ul>
                            <li>Sikca Sorulanlar</li>
                            <li>Iletisime Gec</li>
                            <li>bize fikir verin</li>
                            <li>Kariyer</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={{ span: 4, offset: 2 }} className="pl-md-5 text-center follow-us">
                        <div className="follow-us-header">
                            <h5>BIZI TAKIP ET</h5>
                        </div>
                        <ul className="list-unstyled list-inline social-icons">
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaFacebook size="1.5em" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaInstagram size="1.5em" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaTwitter size="1.5em" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaYoutube size="1.5em" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaPinterest size="1.5em" /></div>
                            </li>
                            <li className="list-inline-item">
                                <div className="icon-wrapper"><FaLinkedin size="1.5em" /></div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="px-0">
                <hr />

                <Row className="justify-content-center py-3 px-4">
                    <Col xs={12} className="text-center legal">
                        <p>
                            <span>LegalNotice</span>
                            <span>Privacy Policy</span>
                            <span>Cookie</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
