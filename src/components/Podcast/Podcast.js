import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Podcast.css";
import Rectangle2937 from "../../images/Rectangle 2937.png";
import Rectangle2938 from "../../images/Rectangle 2938.png";
import Rectangle2940 from "../../images/Rectangle 2940.png";

const Podcast = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://w3yz.com/api/ch")
            .then((response) => {
                setImages(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ background: 'linear-gradient(295.39deg, #D2D2D2 0%, #EFEFEF 94.8%)', borderRadius: '40px', margin: '50px 20px 0 20px' }}>
            <Container fluid >
                <Row className="firstrow" style={{ margin: '50px ' }}>
                    <Col md={6} className="text-start py-0" style={{ marginTop: "-2%" }}>
                        <h1 className="podcast-title">Podcast</h1>
                        <p className="podcast-description">Bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu yüzden en iyi şekilde</p>
                        <p className="podcast-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <h1 className="spotify-title" style={{ marginTop: "15%", marginLeft: "4%" }} >SPOTİFAY</h1>
                    </Col>
                    <Col md={4} className=" text-start py-4" style={{ marginTop: "5%", marginLeft: "6%" }} >
                        <Row className=" gx-1">
                            <Col md={4} className="d-flex flex-column px-1" >
                                <img src={images[7]?.imagelist[0]?.url} alt="Image7" className="img-fluid mb-0" style={{ height: '50%', objectFit: 'contain', marginTop: "-6%" }} />
                                <img src={images[4]?.imagelist[0]?.url} alt="Image4" className="img-fluid" style={{ height: '70%', objectFit: 'contain' }} />
                            </Col>
                            <Col md={4} className="d-flex flex-column px-1">
                                <img src={images[8]?.imagelist[0]?.url} alt="Image8" className="img-fluid mb-0" style={{ height: '70%', objectFit: 'contain' }} />
                                <img src={images[7]?.imagelist[0]?.url} alt="Image7" className="img-fluid" style={{ height: '50%', objectFit: 'contain' }} />
                            </Col>
                            <Col md={4} className=" thirdimg d-flex flex-column px-1" style={{ marginTop: "-50px" }}>
                                <Col className="p-0 " style={{ width: '200%' }}>
                                    <img src={images[10]?.imagelist[0]?.url} alt="Image10" className="img-fluid mb-0" style={{ width: '500%', height: '150%', objectFit: 'contain', marginTop: "-4%" }} />
                                </Col>
                                <Row className="gx-0" style={{ width: '200%' }}>
                                    <Col className="p-0" >
                                        <img src={images[9]?.imagelist[0]?.url} alt="Image9" className="img-fluid" style={{ height: '150%', objectFit: 'contain', marginTop: "-5%" }} />
                                    </Col>
                                    <Col className="p-0">
                                        <img src={images[9]?.imagelist[0]?.url} alt="Image9" className="img-fluid" style={{ height: '150%', objectFit: 'contain', marginTop: "-5%", marginLeft: "1%" }} />
                                    </Col>
                                </Row>
                                <Col className="p-0" style={{ width: '200%' }}>
                                    <img src={images[5]?.imagelist[0]?.url} alt="Image5" className="img-fluid" style={{ height: '150%', objectFit: 'contain', width: '140%', marginTop: "-8%" }} />
                                </Col>
                            </Col>
                        </Row>
                    </Col>


                </Row>
                <Row style={{ margin: '50px ' }}>
                    <Col md={3} className="py-4">
                        <Row>
                            <Col md={12} className="position-relative">
                                <div className="image-container">
                                    <img src={Rectangle2937} alt="Image1" className="img-fluid" />
                                    <p className="text-start position-absolute top-0 start-5 text-white" style={{ marginTop: '20px', marginLeft: '5%' }}>EUROPEAN</p>

                                </div>
                                <p className="position-absolute start-5 bottom-0 text-white" style={{ maxWidth: '80%', marginLeft: '8%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className="py-4">
                        <Row>
                            <Col md={12} className="position-relative">
                                <div className="image-container">
                                    <img src={images[2]?.imagelist[0]?.url} alt="Image2" className="img-fluid" />
                                    <p className="text-start position-absolute top-0 start-5 text-white" style={{ marginTop: '20px', marginLeft: '5%' }}>EUROPEAN</p>
                                </div>
                                <p className="position-absolute start-5 bottom-0 text-white" style={{ maxWidth: '80%', marginLeft: '8%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className="py-4">
                        <Row>
                            <Col md={12} className="position-relative">
                                <div className="image-container">
                                    <img src={Rectangle2938} alt="Image3" className="img-fluid" />
                                    <p className="text-start position-absolute top-0 start-5 text-white" style={{ marginTop: '20px', marginLeft: '5%' }}>EUROPEAN</p>
                                </div>
                                <p className="position-absolute start-5 bottom-0 text-white" style={{ maxWidth: '80%', marginLeft: '8%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} className="py-4">
                        <Row>
                            <Col md={12} className="position-relative">
                                <div className="image-container">
                                    <img src={Rectangle2940} alt="Image4" className="img-fluid" />
                                    <p className="text-start position-absolute top-0 start-5 text-white" style={{ marginTop: '20px', marginLeft: '5%' }}>EUROPEAN</p>
                                </div>
                                <p className="position-absolute start-5 bottom-0 text-white" style={{ maxWidth: '80%', marginLeft: '8%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Podcast;
