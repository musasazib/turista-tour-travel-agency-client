import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://secret-sands-29500.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-color mt-5 text-center">Travel Most Popular Place <br /> In The World</h2>
            <div className="product-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;