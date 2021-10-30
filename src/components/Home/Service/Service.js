import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, name, description } = service;

    return (
        <div className="service-product pb-3">
            <img src={img} alt="" />
            <h3 className="name">{name}</h3>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">BOOKING</button>
            </Link>
        </div>
    );
};

export default Service;