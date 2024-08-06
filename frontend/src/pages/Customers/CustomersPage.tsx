import { useEffect, useState } from "react";
import CustomerBox from "../../Components/CustomerBox/CustomerBox";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { customerType } from "../../types/global.types";
import "./CustomersPage.css";
import { baseUrl } from "../../constants/global.constants";

export default function CustomerPage(){

    const [customers, setCustomers] = useState<customerType[]>([]);

    useEffect(() => {

        fetch(baseUrl.concat("/api/customers"))
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
        <div className="page-container">
            <Sidebar />
            <div className="page-content">

                {
                    customers.map((customer) => {
                        return <CustomerBox key={customer.customerId} customerId={customer.customerId} customerFullName={customer.customerFullName} phoneNumber={customer.phoneNumber} address={customer.address} />
                    })
                }

                {/*
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngörenasdasdasdsdsdsdsdsdsdsdsdsdsdsds"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                <CustomerBox customerId={2} customerFullName={"ege uzun"} phoneNumber={"05395611604"} address={"haznedar mah. posta cad. no36 daire 7 istanbul/Güngören"} />
                */}
            </div>
        </div>
    </div>);
}