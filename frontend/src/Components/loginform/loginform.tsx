import './loginform.css';
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { SubmitHandler, useForm } from 'react-hook-form';
import { userType } from '../../types/global.types';
import { backendUrl } from '../../constants/global.constants';
import { useNavigate } from 'react-router-dom';

export default function Loginform(){

    const {register, handleSubmit, formState: { errors } }  = useForm<userType>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<userType> = (data) => {
        fetch(`${backendUrl}/api/user/${data.email}`)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
        .then((dataResponse) => {
            if( data.password === dataResponse.password){
                alert("Login successful");
                navigate("/customers");
            }
        }).catch((error) => {
            alert("Login failed");
        });
    };

    return(
        <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                    <input {...register("email", {required:true})} type="text" placeholder="Email"/>
                    <IoIosMail className="icon"/>
                </div>
                <div className="input-box">
                    <input {...register("password", {required: true})} type="password" placeholder="Password" className={errors.password ? "error" : ""}/>
                    <FaLock className="icon"/>
                </div>
                
                <button type="submit" className="submit-button">SIGN IN</button>
            </form>
        </div>
    );
}