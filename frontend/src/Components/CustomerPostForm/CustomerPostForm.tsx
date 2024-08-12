import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { customerType } from '../../types/global.types';
import { backendUrl } from '../../constants/global.constants';
import { error } from 'console';
import './CustomerPostForm.css';

export default function CustomerPostForm() {

    const {register , handleSubmit, formState: {errors}} = useForm<customerType>();

    const onSubmit: SubmitHandler<customerType> = (data) => {
        fetch(backendUrl.concat("/api/customer"),{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if(response.ok){
                alert("Customer created successfully");
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='customer-post-form'>
                <div className="customer-name-form">
                    <input {...register("customerFullName",{required:true})} type='text' placeholder='Full Name' className={errors.customerFullName ? "error" : ""}></input>
                </div>
                <div className="customer-email-form">
                    <input {...register("phoneNumber",{
                        required:true,
                        pattern: /^[0-9]{11}$/
                        })} type='text' placeholder='Phone number' className={errors.phoneNumber ? "error" : ""}></input>
                </div>
                <div className='customer-address-form'>
                    <input {...register("address", {required: true})} type='text' placeholder='Address' className={errors.address ? "error" : ""}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

