import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, placeName, description } = service;

    return (
        <div className="service-product pb-3">
            <img className="service-img" src={img} alt="" />
            <h3 className="p-2">{placeName}</h3>
            <p className="px-2">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-service">BOOKING</button>
            </Link>
        </div>
    );
};

export default Service;