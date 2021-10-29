import React, { useEffect, useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully');
                        const remainingUser = services.filter(service => service._id !== id);
                        setServices(remainingUser);
                    }
                })
        }
    }

    return (
        <div>
            <h2>Users Available: {services.length}</h2>
            <ul>
                {
                    services.map(service => <li
                        key={service._id}
                    >{service.name} = {service.email}
                        <button onClick={() => handleDeleteUser(service._id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Admin;