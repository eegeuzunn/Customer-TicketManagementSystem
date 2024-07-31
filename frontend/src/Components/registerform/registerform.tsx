import { IoIosMail } from "react-icons/io";
import { CgRename } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import './registerform.css';

export default function RegisterForm(){
    return(
        <div className="form-container">
            <form>
            <div className="text-box">
                <input type="text" placeholder="Email" />
                <IoIosMail className="text-icon"/>
            </div>
            <div className="text-box-name-surname">
                    <div className="text-box name">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="text-box surname">
                        <input type="text" placeholder="Surname" />
                    </div>
                </div>
            <div className="text-box">
                <input type="text" placeholder="Phone number" />
                <FaPhoneAlt className="text-icon"/>   
            </div>
            <div className="text-box">
                <input type="password" placeholder="Password" />
                <FaLock className="text-icon" />
            </div>
            <button type="submit" className="signup-buton">SIGN UP</button>
            </form>
            
        </div>
    );
}