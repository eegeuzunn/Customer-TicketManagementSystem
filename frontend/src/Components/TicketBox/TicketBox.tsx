import { useState } from 'react';
import './TicketBox.css';
import { backendUrl } from '../../constants/global.constants';
import { ticketType } from '../../types/global.types';

export default function TicketBox(props: ticketType) {

    function getBorderColor(cardinalityId: number) {
        switch (cardinalityId) {
            case 1:
                return "rgb(255, 86, 86)";
            case 2:
                return "rgb(238, 255, 88)";
            case 3:
                return "white";
            case 4:
                return "rgb(0, 197, 43)";
            default:
                return "black";
        }
    }


    const ticketBorderColor = getBorderColor(props.cardinalityId);

    function formatDate(dateTime: string) {
        const arr = dateTime.split("T");
        return arr[0];
    }

    const [filterSelection, setFilterSelection] = useState<number>(props.cardinalityId);

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFilterSelection(Number(event.target.value));

        fetch(`${backendUrl}/api/ticket/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cardinalityId": Number(event.target.value),
                "cardinalityName": event.target.options[event.target.selectedIndex].text,
                "title": props.title,
                "description": props.description,
                "authorFullName": props.authorFullName,
                "phoneNumber": props.phoneNumber,
            })
        }).then(response => {
            if (response.ok) {
                alert("Ticket updated successfully");
                return response.json();
            }
        }).catch(error => console.log(error));


    }


        return (
            <div>
                <div className="ticket-box" style={{ borderColor: `${ticketBorderColor}` }}>
                    <div className='ticket-title-date'>
                        <div className="ticket-box-title">{props.title}</div>
                        <div className="ticket-box-date">{formatDate(props.createdAt)}</div>
                    </div>


                    <div className="ticket-box-description">{props.description}</div>

                    <div className='ticket-sender-informations'>
                        <div className="ticket-box-author">{props.authorFullName} - {props.phoneNumber}</div>
                        <div className="ticket-box-cardinality">
                            <select value={filterSelection} onChange={handleChange}>
                                <option value="1">Critical</option>
                                <option value="2">Care</option>
                                <option value="3">Non-essential</option>
                                <option value="4">Resolved</option>
                                <option value="5">Undecided</option>
                            </select>
                        </div>
                    </div>

                </div>

            </div>
        );
}