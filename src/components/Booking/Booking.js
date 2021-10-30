import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {

    const { user } = useAuth();

    const { serviceId } = useParams();
    const [details, setDetails] = useState({});
    console.log(details)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === serviceId);
                setDetails(book)
            });
    }, [serviceId])
    const { name, description } = details || {};
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <h1 className="mt-5 text-center text-info">
                Please Booking Place
            </h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                defaultValue={user?.displayName}
                                className="p-2 m-2"
                            />
                            <br />

                            <input
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("date", { required: true })}
                                placeholder="date"
                                defaultValue={name}
                                className="p-2 m-2"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                defaultValue={description}
                                className="p-2 m-2"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;