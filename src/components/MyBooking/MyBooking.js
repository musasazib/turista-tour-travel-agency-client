import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`https://secret-sands-29500.herokuapp.com/myBooking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [user.email]);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://secret-sands-29500.herokuapp.com/orders/${id}`
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
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {booking?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{pd.placeName}</td>
                                <td>{pd.price}</td>
                                <td>{pd.date}</td>
                                <button
                                    onClick={() => handleDeleteUser(pd._id)}
                                    
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

export default MyBooking;