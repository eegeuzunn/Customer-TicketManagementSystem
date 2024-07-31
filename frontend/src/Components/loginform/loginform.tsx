import './loginform.css';
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";

export default function loginform(){
    return(
        <div className="formContainer">
            <form>
                <div className="input-box">
                    <input type="text" placeholder="email"/>
                    <IoIosMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="password"/>
                    <FaLock className="icon"/>
                </div>
                
                <button type="submit" className="submit-button">SIGN IN</button>
                
                
            </form>
        </div>
    );
}