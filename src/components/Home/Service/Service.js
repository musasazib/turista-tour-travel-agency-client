import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { img, name, price } = service;
    return (
        <div className="service-product pb-3">
            <img src={img} alt="" />
            <h3 className="name">{name}</h3>
            <h1>{price}</h1>
            <button className="btn btn-product">Add to Cart</button>
        </div>
    );
};

export default Service;