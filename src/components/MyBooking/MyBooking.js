import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [user.email]);

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
                        const remainingUser = booking.filter(book => book._id !== id);
                        setBooking(remainingUser);
                    }
                })
        }
    }

    return (
        <div>
            <div className="container">
                <h2>My Booking: {booking?.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Place Name</th>
                            <th>Tour Price</th>
                            <th>Image Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {booking?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{pd.date}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <button
                                    onClick={() => handleDeleteUser(pd._id)}
                                    className="btn bg-danger p-2"
                                >
                                    Delete
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default MyBooking;