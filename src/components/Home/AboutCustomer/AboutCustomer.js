import React from 'react';
import './AboutCustomer.css';

const AboutCustomer = () => {
    return (
        <div className="background">
            <div className="text-center">
                <h1 className="mt-5 py-5">What Our Happy Customers <br /> <span className="text-color-about">Say About Us</span></h1>
                <p className="mb-5">
                    World is committed to making participial in the event that raiment free experience for every, <br /> regardless level of experience, gender identity.and expression orientation, disability by the <br /> personal appearance
                </p>
                <div className="d-flex justify-content-center pb-5">
                    <img src="https://i.ibb.co/Dkv2pLC/testimonial-profile.png" alt="" className="rounded-circle image" />
                    <div className="m-3">
                        <h3>William Mill</h3>
                        <p>Tour - Sempra, Malaysia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCustomer;