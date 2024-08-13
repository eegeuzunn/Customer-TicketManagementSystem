import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./TicketsPage.css";
import TicketBox from "../../Components/TicketBox/TicketBox";
import { backendUrl } from "../../constants/global.constants";
import { ticketType } from "../../types/global.types";

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

    function onClickOnProgress(){
        setFilterSelection(FilterSelection.ONPROGRESS);
    } 

    
    function onClickUndecided(){
        setFilterSelection(FilterSelection.UNDECIDED);
    } 

    
    function onClickResolved(){
        setFilterSelection(FilterSelection.RESOLVED);
    } 

    return(<div>
        <div className="tickets-container">
            <div className="tickets-sidebar-container">
                <Sidebar />
            </div>
            <div className="tickets-content-container">
                <div className="tickets-filter-container">
                    <div className="filter-button" onClick={onClickOnProgress}>On Progress</div>
                    <div className="filter-button" onClick={onClickUndecided}>Undecided</div>
                    <div className="filter-button" onClick={onClickResolved}>Resolved</div>
                </div>
                <div className="tickets-list-container">
                    { filterSelection === FilterSelection.ONPROGRESS &&
                        (tickets.filter( t => t.cardinalityId <= 3).map((ticket) => {
                            return <TicketBox {...ticket} />
                        }))
                    }

                    { filterSelection === FilterSelection.RESOLVED &&
                        (tickets.filter( t => t.cardinalityId === 4).map((ticket) => {
                            return <TicketBox {...ticket} />
                        }))
                    }

                    { filterSelection === FilterSelection.UNDECIDED &&
                        (tickets.filter( t => t.cardinalityId === 5).map((ticket) => {
                            return <TicketBox {...ticket} />
                        }))
                    }
                </div>
            </div>
        </div>
    </div>);
}