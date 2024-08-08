import { Link } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
    return(
            <div className="sidebar">

                <div className="sidebar-item">
                    <Link to="/customers" className="item">Customers</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/tickets" className="item">Tickets</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/profile" className="item">Profile</Link>
                </div>
                <div className="sidebar-item" id="quit-button">
                    <Link to="/" className="item">QUIT</Link>
                </div>
            </div>
    );
}