import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, description } = service;

    const handleMenageUser = () => {

    }

    return (
        <div className="service-product pb-3">
            <img src={img} alt="" />
            <h3 className="name">{name}</h3>
            <p>{description}</p>
            <button className="btn btn-warning" onClick={() => handleMenageUser(service._id)}>Add to Cart</button>
        </div>
    );
};

export default Service;