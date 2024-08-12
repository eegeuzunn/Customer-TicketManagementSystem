import { IoIosMail } from "react-icons/io";
import { CgRename } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {registerType} from '../../types/global.types';
import { SubmitHandler, useForm } from "react-hook-form";
import { backendUrl } from "../../constants/global.constants";

import './registerform.css';

export default function RegisterForm(){

    const {register, handleSubmit, formState: {errors}} = useForm<registerType>();

    const onSubmit: SubmitHandler<registerType> = (data) => {
        
        fetch(backendUrl.concat("/api/user"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if(response.ok){
                alert("User created successfully");
            } else {
                alert("User not created");
            }
        }).catch((error) => {
            console.log(error);
        });
        console.log(data);
    };


    return(
        <div className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <form>
            <div className="text-box">
                <input {...register("email",
                    {required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} 
                    type="text" placeholder="Email" className={errors.email ? "error" : "" }/>
                <IoIosMail color="black" className="text-icon"/>
            </div>
            <div className="text-box-name-surname">
                    <div className="text-box-name1">
                        <input {...register("name", { required: true})}type="text" placeholder="Name" className={errors.name ? "error" : ""}/>
                    </div>
                    <div className="text-box-surname1">
                        <input {...register("surname", { required: true})} type="text" placeholder="Surname" className={ errors.surname ? "error" : "" } />
                    </div>
                </div>
            <div className="text-box">
                <input {...register("phoneNumber", { 
                    required: true, 
                    pattern: /^[0-9]{11}$/
                    })} type="text" placeholder="Phone number" maxLength={11} className={ errors.phoneNumber ? "error" : ""}/>
                <FaPhoneAlt color="black" className="text-icon"/>   
            </div>
            <div className="text-box">
                <input {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
                    })} type="password" placeholder="Password" className={errors.password ? "error" : "ps-text"}/>
                <FaLock color="black" className="text-icon" id="lock-icon"/>
            </div>
            <button type="submit" className="signup-buton">SIGN UP</button>
            </form>
            
        </div>
    );
}