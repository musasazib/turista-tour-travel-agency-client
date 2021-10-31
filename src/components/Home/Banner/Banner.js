import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner1.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="header-style">IT’S <br />
                            GYM TIME</h1>
                        <h4 className="body-text">Lorem ipsum dolor sit amet, quo no quidam
                            facilis at pri deleniti comprehensam.</h4>
                        <button className="btn all-btn banner-btn">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="header-style">DOING HARD WORK</h1>
                        <h4 className="body-text">Lorem ipsum dolor sit amet, probo aliquando percipitur ei vel, et vim simul iuvaret.
                            Mei ad legere eloquentiam. Ad pri habeo adversarium.</h4>
                        <button className="btn all-btn banner-btn">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1  className="header-style">MAKE IT HAPPEN!</h1>
                        <h4 className="body-text">WE ARE READY TO FIT YOU.</h4>
                        <button className="btn all-btn banner-btn">LEARN MORE</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;