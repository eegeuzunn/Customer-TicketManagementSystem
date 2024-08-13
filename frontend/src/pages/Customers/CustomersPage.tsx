import { useEffect, useState } from "react";
import CustomerBox from "../../Components/customerBox/CustomerBox";
import Sidebar from "../../Components/sidebar/Sidebar";
import { customerType } from "../../types/global.types";
import "./CustomersPage.css";
import { backendUrl } from "../../constants/global.constants";
import CustomerPostForm from "../../Components/customerPostForm/CustomerPostForm";

export default function CustomerPage(){

    const [customers, setCustomers] = useState<customerType[]>([]);

    useEffect(() => {

        fetch(backendUrl.concat("/api/customers"))
            .then((response) => {
                return response.json();
            })
            .then( data => {
                setCustomers(data);
            })
            .catch((error) => {
                console.log(error);
            });
            console.log(customers);
    }, []);

    return(
    <div>
        <div className="page-container-customer">
            <div className="sidebar-page">
                <Sidebar />
            </div>
            <div className="page-content">
                <div className="c-box">
                {
                    customers.map((customer) => {
                        return <CustomerBox {...customer} />
                    })
                }
                </div>
                <div className="c-post-form">
                <CustomerPostForm />
            </div>
            </div>
            
        </div>
    </div>);
}