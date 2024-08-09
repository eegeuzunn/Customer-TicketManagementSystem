import "./LoginPage.css";
import LoginForm from "../../Components/loginform/loginform";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="page-container">
      <div className="navigation">
        <Link to="/ticket" className="ticket">
          Ticket form
        </Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </div>
      <div className="formx-container">
        <div className="log-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
