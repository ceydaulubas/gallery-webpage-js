import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import sliderImage from "../../images/sliderImage.png";
import "./Slider.css";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        {
            id: 1,
            src: `${sliderImage}`,
            alt: "Image 1",
        },
        {
            id: 2,
            src: `${sliderImage}`,
            alt: "Image 2",
        },
        {
            id: 3,
            src: `${sliderImage}`,
            alt: "Image 3",
        },
    ];

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="slider-container">
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                {images.map((image) => (
                    <Carousel.Item key={image.id}>
                        <img src={image.src} alt={image.alt} className="d-block w-100" />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="slider-caption">

                <h1 className="slider-title">Yeni gelen sanat eserlerini inceleyin</h1>
                <p className="slider-subtitle">Özel Galerimiz</p>
            </div>
        </div>
    );
};

export default Slider;
