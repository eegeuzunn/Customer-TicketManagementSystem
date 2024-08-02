import { IoIosMail } from "react-icons/io";
import { CgRename } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {registerType} from '../../types/global.types';
import { SubmitHandler, useForm } from "react-hook-form";
import { baseUrl } from "../constants/global.constants";

import './registerform.css';

export default function RegisterForm(){

    const {register, handleSubmit, formState: {errors}} = useForm<registerType>();

    const onSubmit: SubmitHandler<registerType> = (data) => {
        
        fetch(baseUrl.concat("/api/user"), {
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
                <input {...register("email",{required: true, validate: (val) => val.includes("@")})}type="text" placeholder="Email" className={errors.email ? "error" : "" }/>
                <IoIosMail className="text-icon"/>
            </div>
            <div className="text-box-name-surname">
                    <div className="text-box name">
                        <input {...register("name", { required: true})}type="text" placeholder="Name" className={errors.name ? "error" : ""}/>
                    </div>
                    <div className="text-box surname">
                        <input {...register("surname", { required: true})} type="text" placeholder="Surname" className={ errors.surname ? "error" : "" } />
                    </div>
                </div>
            <div className="text-box">
                <input {...register("phoneNumber", { required: true, validate : (val) => val.startsWith("0")})} type="text" placeholder="Phone number" maxLength={11} className={ errors.phoneNumber ? "error" : ""}/>
                <FaPhoneAlt className="text-icon"/>   
            </div>
            <div className="text-box">
                <input {...register("password")} type="password" placeholder="Password" className={errors.password ? "error" : "ps-text"}/>
                <FaLock className="text-icon" id="lock-icon"/>
            </div>
            <button type="submit" className="signup-buton">SIGN UP</button>
            </form>
            
        </div>
    );
}