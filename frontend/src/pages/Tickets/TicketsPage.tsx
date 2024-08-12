import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./TicketsPage.css";
import TicketBox, { ticketType } from "../../Components/TicketBox/TicketBox";
import { backendUrl } from "../../constants/global.constants";

enum FilterSelection{
    ONPROGRESS,
    UNDECIDED,
    RESOLVED
}
 
export default function TicketsPage(){

    const [filterSelection, setFilterSelection] = useState<FilterSelection>(FilterSelection.ONPROGRESS);
    const [tickets, setTickets] = useState<ticketType[]>([]);
    
    useEffect(() => {
        fetch(`${backendUrl}/api/tickets`)
        .then(response => { 
            if(response.ok)
                return response.json();
            })
            .then(data => 
                setTickets(data)
            )
            .catch(error => console.log(error))
    }, []);

    return(<div>
        <div className="tickets-container">
            <div className="tickets-sidebar-container">
                <Sidebar />
            </div>
            <div className="tickets-content-container">
                <div className="tickets-filter-container">
                    <div className="filter-button">On Progress</div>
                    <div className="filter-button">Undecided</div>
                    <div className="filter-button">Resolved</div>
                </div>
                <div className="tickets-list-container">
                    {
                        tickets.map((ticket) => {
                            return <TicketBox {...ticket} />
                        })
                        }
                </div>
            </div>
        </div>
    </div>);
}