import { Form } from "react-router-dom";
import "./TicketForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { ticketPostType } from "../../types/global.types";
import { backendUrl } from "../../constants/global.constants";
import { kMaxLength } from "buffer";

export default function TicketForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ticketPostType>();

    const onSubmit: SubmitHandler<ticketPostType> = (data) => {
        fetch(backendUrl.concat("/api/ticket"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Ticket sent successfully");
                } else {
                    alert("Ticket not sent");
                }
            })
            .catch((error) => {
                console.log(error);
            });
            console.log(data);
    };

    return (
        <div className="form-c">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="name-phone-container">
                    <input
                        {...register("authorFullName", { required: true, minLength: 3 })}
                        type="text"
                        placeholder="Full Name"
                        className={errors.authorFullName ? "error" : ""}
                    />
                    <input
                        {...register("phoneNumber", { required: true, 
                        pattern: /^[0-9]{11}$/ })}
                        type="text"
                        placeholder="Phone Number"
                        className={errors.phoneNumber ? "error" : ""} 
                        maxLength={11}
                    />
                </div>
                <div className="title-container">
                    <input
                        {...register("title", { required: true })}
                        type="text"
                        placeholder="Title"
                        className={errors.title ? "error" : ""}
                    />
                </div>
                <div className="description-container">
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Description"
                        maxLength={335}
                        className={errors.description ? "error" : ""}
                    />
                </div>
                <button type="submit">SEND</button>
            </Form>
        </div>
    );
}
