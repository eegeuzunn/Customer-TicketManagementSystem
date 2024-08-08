import { customerType } from "../../types/global.types";
import { useEffect, useState } from "react";
import "./CustomerBox.css";
import { Link } from "react-router-dom";
import { backendUrl, frontendUrl } from "../../constants/global.constants";


export default function CustomerBox (props: customerType) {

    const [customer, setCustomer] = useState(props);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    
    const handleDeleteClick = () => {
        setDeleteConfirmation(true);
    }

    const handleConfirmClickYes = () => {
        

        fetch (backendUrl.concat("/api/customer/" + props.customerId), {method: "DELETE",})
        .then(response => {
            if (response.ok) {
                setDeleteState(true);
                setDeleteConfirmation(false);
            }
        }).catch(error => {
            console.log("Error: ", error);  
        });

    setDeleteState(true);
}

    const handleConfirmClickNo = () => {
        setDeleteConfirmation(false);
    }
    
    return(
        
            <div className="customer-box">
                
                {!deleteConfirmation && !deleteState && (
                    <div>
                        <Link key={props.customerId} to={`${frontendUrl}/customer/${props.customerId}`} className="link-customer">
                        <div className="name-header">{props.customerFullName.toUpperCase()}</div>
                        <div className="id-phone-row">
                            <div className="customer-id">Customer ID: {props.customerId}</div>
                            <div className="phone-number">Tel: {props.phoneNumber}</div>
                        </div>
                        <div className="address">Adress: {props.address}</div>
                        </Link>
                        <div className="delete-button" onClick={handleDeleteClick}>X</div>
                    </div>
                )}

                {(deleteConfirmation && !deleteState)&& (
                    <div className="confirmation-container">
                        <div className="confirmation-text">Are you sure you want to delete this customer?</div>
                        <div className="confirmation-buttons">
                            <button className="confirmation-button" id="yes-button" onClick={handleConfirmClickYes}>Yes</button>
                            <button className="confirmation-button" id="no-button" onClick={handleConfirmClickNo}>No</button>
                        </div>
                    </div>
                )}

                {deleteState && (
                    <div className="delete-state">
                        Customer has been deleted.
                    </div>
                )}
            </div>
        
    );
}