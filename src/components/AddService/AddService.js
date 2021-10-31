import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-sands-29500.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className="m-5 text-style">Add Your Beautiful Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("placeName", { required: true, maxLength: 20 })} placeholder="Place Name" />
                <textarea {...register("description")} placeholder="Description" />

                <input {...register("img")} placeholder="Image url" />
                <input {...register("price")} placeholder="price" />
                <input className="btn-style" type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;