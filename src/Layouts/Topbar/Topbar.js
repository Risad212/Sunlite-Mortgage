import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/Media/logo.png'
import './Topbar.css';

const Topbar = () => {
    return (
        <>
            <div className="topbar py-3">
                <Container>
                    <Row>
                        <Col lg="4" md="12" className="my-1 d-flex align-items-center order-lg-first order-md-second order-sm-second">
                            <ul className="phone-wrapper d-flex">
                                <li className='me-4'>
                                    <a href="#">
                                        <i class="fa-solid fa-phone me-2"></i>
                                        <span>(0123)-654-789</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa-solid fa-phone me-2"></i>
                                        <span>(0123)-654-789</span>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg="4" md="12" className="my-1 order-lg-second order-md-first order-sm-first">
                            <div className="text-center">
                                <img src={Logo} alt="" className='img-fluid'/>
                            </div>
                        </Col>
                        <Col lg="4" md="12" className="my-3 d-flex align-items-center justify-content-center">
                            <div className='email-button'>
                                <a href="#">E-mail Now</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Topbar;