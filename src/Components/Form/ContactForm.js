import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./ContactForm.css";


const ContactForm = () => {
    const [formInfo, setFormInfo] = useState({
        fname: '',
        lname: '',
        email: '',
        number: '',
        companyName: '',
        message: ''
    })
    
   const handleSubmit = (e) =>{
     e.preventDefault()
     const newinfo = {...formInfo}

     console.log(newinfo)
   }
   
    return (
        <>
            <div className="form-container">
                <Form action="#" onSubmit={handleSubmit}>
                    <Form.Group className="mb-1" controlId="formBasicFName">
                        <Form.Label>First Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="user_Fname" onChange={(e) => setFormInfo({fname: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicLName">
                        <Form.Label>Last Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="user_lname" onChange={(e) => setFormInfo({lname: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email<span className='required'>*</span></Form.Label>
                        <Form.Control type="email" placeholder="" name="user_email" onChange={(e) => setFormInfo({email: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicNumber">
                        <Form.Label>Contact Number<span className='required'>*</span></Form.Label>
                        <Form.Control type="tel" placeholder="(506) 234-5678" name="user_number" onChange={(e) => setFormInfo({number: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicOrganizationName">
                        <Form.Label>Your Organization</Form.Label>
                        <Form.Control type="text" placeholder="" name="user_companyName" onChange={(e) => setFormInfo({companyName: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="user_message" onChange={(e) => setFormInfo({message: e.target.value})}/>
                    </Form.Group>

                    <div className="formBtn">
                        <input className='button' type="submit" value="Submit" />
                    </div>
                </Form>
            </div>
        </>
    );
};

export default ContactForm;
