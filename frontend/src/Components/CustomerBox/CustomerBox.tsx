import { customerType } from "../../types/global.types";
import { useEffect, useState } from "react";
import "./CustomerBox.css";
import { Link } from "react-router-dom";
export default function CustomerBox (props: customerType) {

    const [customer, setCustomer] = useState(props);
    
    
    return(
        
            <div className="customer-box">
                <Link to="" className="link-customer">
                <div className="name-header">{props.customerFullName.toUpperCase()}</div>
                <div className="id-phone-row">
                    <div className="customer-id">Customer ID: {props.customerId}</div>
                    <div className="phone-number">Tel: {props.phoneNumber}</div>
                </div>
                <div className="address">Adress: {props.address}</div>
                </Link>
            </div>
        
    );
}