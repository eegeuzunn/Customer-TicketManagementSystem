import { Form } from 'react-router-dom';
import './TicketForm.css';

export default function TickerForm(){
    return(
        <div className='form-c'>
            <Form>
                <div className="name-phone-container">
                    <input type="text" placeholder='Full Name'/>
                    <input type="text" placeholder='Phone Number'/>
                </div>
                <div className='title-container'>
                    <input type="text" placeholder='Title'/>
                </div>
                <div className='description-container'>
                <textarea
                        name="postContent"
                        placeholder="Description"
                        maxLength={335}/>
                </div>
                <button type='submit'>SEND</button>
                
            </Form>
        </div>
    );
}