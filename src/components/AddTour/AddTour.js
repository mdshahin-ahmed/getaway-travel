import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTour = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/tours', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('Added Successfully!');
                reset();
            }
        })
    }
    return (
        <div>
            <h2 className='mt-5'>Please add tour</h2>
            <div className='d-flex justify-content-center'>
                <form className='orderPlace-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Tour Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input placeholder='Image url' {...register("img", { required: true })} />
                    <textarea placeholder='Description' {...register("description", { required: true })} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTour;