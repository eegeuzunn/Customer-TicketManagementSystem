import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../constants/global.constants";
import { customerCommentType, customerType } from "../../types/global.types";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './CustomerDetailPage.css';
import { FaEdit } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CustomerDetailPage() {
    

    const { customerId } = useParams<{ customerId: string }>();

    const [editButtonState, setEditButtonState] = useState<boolean>(false);

    //States for api call data

    const [customerData, setCustomerData] = useState<customerType>({ customerId: 0, customerFullName: "", phoneNumber: "", address: "" });
    const [customerComment, setCustomerComment] = useState<customerCommentType[]>([]);

    //Customer Detail Fetch ---------------------------------
    useEffect(() => {
        fetch(`${backendUrl}/api/customer/${customerId}`)
    .then((response) => {
        if (response.ok){
            return response.json();
        }
        })
    .then((data) =>{
        setCustomerData(data);
        console.log(data);
        
    }).catch((error) => {
        console.log(error);
    })
    }, []);
    //Customer Details Fetch end-----------------------------

    // Customer Comment Fetch -----------------------------
    useEffect(() => {
        fetch(`${backendUrl}/api/customerComment/${customerId}`)
    .then((response) => {
        if (response.ok){
            return response.json();
        }
        })
    .then((data) =>{
        setCustomerComment(data);
        console.log(data);
        
    }).catch((error) => {
        console.log(error);
    })
    }, []);
    //Comment fetch end ----------------------

    function onEditButtonClick() {
        setEditButtonState(!editButtonState);
    }

    function onPrevButtonClick() {
        setEditButtonState(!editButtonState);
    }

    
    
    const {register , handleSubmit, formState: {errors}} = useForm<customerType>();
    
    const onSubmit: SubmitHandler<customerType> = (data) => {
        fetch(`${backendUrl}/api/customer/${customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
            }).then((response) => {
                if(response.ok){
                    alert("Customer updated successfully");
                    setEditButtonState(!editButtonState);
                    return response.json();
                } else {
                    alert("Customer not updated");
                }
            })
            .then((data) => {
                setCustomerData(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        
    
    
    return (
        
        <div className="customer-detail-container">
            <div className="sidebar-cont">
                <Sidebar />
            </div>
            
                {!editButtonState && (
                <div className="customer-detail-content">
                    <div className="edit-button" onClick={onEditButtonClick}><FaEdit color="black"/></div>
                    <div className="customer-detail-name">{customerData.customerFullName.toUpperCase()}</div>
                    <div className="customer-detail-id-phone">    
                        <div className="customer-detail-id">Customer Id: {customerData.customerId}</div>
                        <div className="customer-detail-phone">Phone Number: {customerData.phoneNumber}</div>
                    </div>
                    <div className="customer-detail-address">{customerData.address}</div>  
                </div>
                )}    

                {editButtonState && (
                    <div className="customer-detail-content">
                        <div className="prev-button"  onClick={onPrevButtonClick}><IoMdArrowRoundBack color="black" /></div>
                        <form className="customer-edit-form" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("customerFullName")} type="text" className="customer-edit-input-fullname" defaultValue={customerData.customerFullName} />
                            <input {...register("phoneNumber")} type="text" className="customer-edit-input-phone" defaultValue={customerData.phoneNumber} />
                            <input {...register("address")} type="text" className="customer-edit-input-address" defaultValue={customerData.address} />
                            <button className="customer-edit-button">Save</button>
                        </form>
                    </div>
                )}

        </div>
    );
}
        