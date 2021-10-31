import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';

const Booking = () => {

    const { user } = useAuth();

    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    console.log(details)
    useEffect(() => {
        fetch('https://secret-sands-29500.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === serviceId);
                setDetails(book)
                
            });
    }, [serviceId])
    // const { placeName, price } = details;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://secret-sands-29500.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
                console.log(result);
            });
        
    };

    
    return (
        <div>
            <h1 className="pt-5 text-center text-style">
                Please Booking Place
            </h1>
            <div className="login-box w-50 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="mt-4">Name:</label>
                            <br />
                            <input
                                {...register("name")}
                                Name
                                defaultValue={user?.displayName}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Email</label>
                            <br />
                            <input
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Place Name:</label>
                            <br />
                            <input
                                {...register("placeName", { required: true })}
                                defaultValue={details?.placeName}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Date</label>
                            <br />
                            <input
                                {...register("date", { required: true })}
                                defaultValue={new Date()}
                                className="p-2 mb-2"
                            />
                            <br />
                            <label>Price</label>
                            <br />
                            <input
                                {...register("price", { required: true })}
                                defaultValue={details?.price}
                                className="p-2 mb-2"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-style w-50 mb-5" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Booking;