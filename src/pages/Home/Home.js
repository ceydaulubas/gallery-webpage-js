import React from "react";
import { Container } from "react-bootstrap";
import image from "../../images/Rectangle 1.png";
import "./Home.css";
import { Slider, Podcast, Footer, Discover } from "../../components";

function Home() {
    return (
        <div>
            <div className="home-page">
                <div className="content">
                    <Container>
                        <div className="welcome-and-image">
                            <div className="image-container">
                                <div className="image-overlay">
                                    <h1>Çocuklar İçin Sanat Eğitimi</h1>
                                    <p>
                                        Ücretsiz Aile Etkinliklerimizde Bir Sanat Dünyası Oyunu Oynayın,
                                        Cocuklarınızla Yaratın ve Keşfedin
                                    </p>
                                </div>
                                <img src={image} alt="Resim" className="home-image" />
                            </div>
                            <div className="welcome-message">
                                <h2>Happy Galeri'ye Hoşgeldiniz</h2>
                                <p>
                                    Bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki!
                                    Bu yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın.
                                    Temaya dayalı bir turu takip etmek için neden ziyaretçi parkurlarımızdan birini seçmiyorsunuz?
                                    Molaya ihtiyacınız olduğunda, müzenin dinlendirici bahçelerinden daha iyi neresi var?
                                </p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Slider />
            <Podcast />
            <Discover />
            <Footer />
        </div>

    );
}

export default Home;
