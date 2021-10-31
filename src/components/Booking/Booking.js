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
        fetch('https://secret-sands-29500.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                const book = data.find(td => td._id === serviceId);
                setDetails(book)
            });
    }, [serviceId])
    const { placeName, price } = details || {};
    console.log(placeName,'xxxxxxx')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://secret-sands-29500.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    // const sectionStyle = {
    //     width: "100%",
    //     height: "400px",
    //     backgroundImage: "url(" + { backgroundImg } + ")"
    // };

    // style={sectionStyle}
    return (
        <div>
            <h1 className="pt-5 text-center text-info">
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
                                defaultValue={placeName}
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
                                defaultValue={price}
                                className="p-2 mb-2"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className="btn btn-info w-50 mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;