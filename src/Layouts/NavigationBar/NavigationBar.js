import React, { useState } from 'react';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const NavigationBar = () => {
    window.onscroll = function () { scrollFunction() };
    const [sticky, setSticky] = useState('')
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setSticky('sticky')
        } else {
            setSticky('')
        }
    }
    return (
        <>
            <div className="navigationBar" id={sticky ? 'sticky' : ''}>
                <Container>
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Row>
                                    <Col lg="12">
                                        <ul>
                                            <li><Link to="/home">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li className='w-115'><Link to="/refinance">Mortgage Refinance</Link></li>
                                            <li className='w-115'><Link to="/purchase">Home Purchase</Link></li>
                                            <li className="w-145"><Link to="/employed">Self Employed Mortgage</Link></li>
                                            <li className="w-145"><Link to="/credit">Home Equity Line Of Credit</Link></li>
                                            <li className="w-180"><Link to="/invesment">Investment Property Mortgage</Link></li>
                                            <li className="w-115"><Link to="/reverse">Reverse Mortgage</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        </>
    );
};

export default NavigationBar;



