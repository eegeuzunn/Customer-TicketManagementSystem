import './TicketBox.css';

export default function TicketBox(props: ticketType) {

    function getBorderColor(cardinalityId: number){
        switch(cardinalityId){
            case 1:
                return "red";
            case 2:
                return "yellow";
            case 3: 
                return "white";
            case 4:
                return "green";
            default:
                return "grey";
        }
    }


    const ticketBorderColor = getBorderColor(props.cardinalityId);


    return (
        <div>
            <div className="ticket-box" style={ {borderColor: `${ticketBorderColor}`} }>
                <div className="ticket-box-title">{props.title}</div>
                <div className="ticket-box-description">{props.description}</div>
                <div className="ticket-box-author">{props.authorFullName}</div>
                <div className="ticket-box-date">{props.createdAt}</div>
                <div className="ticket-box-phone">{props.phoneNumber}</div>
                <div className="ticket-box-cardinality">{props.cardinalityName}</div>
            </div>
        </div>
    );    
}


export type ticketType = {
    
    "id": number,
    "title": string,
    "description": string,
    "authorFullName": string,
    "createdAt": string,
    "phoneNumber": string,
    "cardinalityId": number,
    "cardinalityName": string
}