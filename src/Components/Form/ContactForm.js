import React, { useRef, useState } from 'react';
import {Form } from 'react-bootstrap';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7qya74t','template_vde93za', form.current, 'cRBwueB5Z253m4eiD')
      .then((result) => {
          if(result.text){
             alert('Thank you for contact us. As early as possible  we will contact you')
          }
      }, (error) => {
          alert(error)
      });
      e.target.reset()
  }

    return (
        <>
            <div className="form-container">
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-1" controlId="formBasicFName">
                        <Form.Label>First Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="user_Fname"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicLName">
                        <Form.Label>Last Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" placeholder="" name="user_lname"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email<span className='required'>*</span></Form.Label>
                        <Form.Control type="email" placeholder="" name="user_email"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicNumber">
                        <Form.Label>Contact Number<span className='required'>*</span></Form.Label>
                        <Form.Control type="tel" placeholder="(506) 234-5678" name="user_number"/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicOrganizationName">
                        <Form.Label>Your Organization</Form.Label>
                        <Form.Control type="text" placeholder="" name="user_companyName"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="user_message"/>
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