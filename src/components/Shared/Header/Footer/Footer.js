import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-light mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            {/* <img src={} alt="" style={{ width: "150px" }} /> */}
                            <hr />
                        </div>
                        <div className="col-12 col-md-3">
                            <h4 className="footer-text footer-h2">Our Branch</h4>
                            <p className="footer-text">- Istanbul, Turkey</p>
                            <p className="footer-text">- London, England</p>
                            <p className="footer-text">- Paris, France</p>
                            <p className="footer-text">- New Zealand</p>
                            <p className="footer-text">- Bali</p>
                            <p className="footer-text">- The Maldives</p>
                        </div>
                        <div className="col-12 col-md-3">
                            <h4 className="footer-text footer-h2">Service In Travel</h4>
                            <p className="footer-text">Travel Management</p>
                            <p className="footer-text">Passenger assistance</p>
                            <p className="footer-text">Consulting</p>
                            <p className="footer-text">Leisure Services</p>
                            <p className="footer-text">Technology</p>
                            <p className="footer-text">Internal communication</p>
                            <hr />
                        </div>
                        <div className="col-12 col-md-3">
                            <p className="footer-text">- Get help</p>
                            <p className="footer-text">- Contact Us</p>
                            <p className="footer-text">- Read FAQs</p>
                            <p className="footer-text">- Read our blog</p>
                            {/* <img src={image} alt="" /> */}
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;