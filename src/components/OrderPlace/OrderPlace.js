import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './OrderPlace.css';

const OrderPlace = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
        alert('Done');
        reset();

    };
    return (
        <div>
            <h1>inside order place</h1>
            <div className='d-flex justify-content-center'>
                <form className='orderPlace-form' onSubmit={handleSubmit(onSubmit)}
                >

                    <input defaultValue={user.displayName} {...register("name", { required: true })} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />


                    {errors.email && <span className='text-danger'>This field is required</span>}

                    <input placeholder='Your Address' defaultValue="" {...register("address")} />

                    <input placeholder='Your City' defaultValue="" {...register("city")} />

                    <input placeholder='Your Phone Number' defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderPlace;