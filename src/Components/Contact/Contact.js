import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <h3>ADDRESS</h3>
                            <p>1 Concorde Gate, Suite 702, Toronto, ON M3C 3N6</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="contact-box">
                            <div className="contac-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"></path></svg>
                            </div>
                            <h3>CONTACT NUMBER</h3>
                            <p>Local <Link to="/">(647) 361-8443</Link></p>
                            <p>LD <Link to="/">(877) 385-6267</Link></p>
                            <p>Fax (877) 236-0243</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="contact-box">
                            <div className="contac-icon">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"></path></svg>
                            </div>
                            <h3>email</h3>
                            <p><Link to="/">info@sunlitemortgage.com</Link></p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="contact-box">
                            <div className="contac-icon">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"></path></svg>
                            </div>
                            <h3>BUSINESS HOURS</h3>
                            <p>MON - FRI <br /> 08:30 AM - 07:00 PM</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;