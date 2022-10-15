import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="contact-box">
                            <div className="contac-icon">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;