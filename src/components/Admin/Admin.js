import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Admin.css';

const Admin = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
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
            <div className="container">
                <h2>Total Users: {services.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>User Name</th>
                            <th>Place Name</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd.name}</td>
                                <td>{pd.date}</td>
                                <td>{pd.description}</td>
                                <button
                                    onClick={() => handleDeleteUser(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Cancel
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default Admin;