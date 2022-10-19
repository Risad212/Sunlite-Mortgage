import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css';
import Titleimg from '../../assets/Media/title.png';
import Card from '../../assets/Media/card.png';
import CardTow from '../../assets/Media/card2.png';
import CardThree from '../../assets/Media/card3.png';
import CardFour from '../../assets/Media/card4.png';
import CardFive from '../../assets/Media/card5.png';
import CardSix from '../../assets/Media/card6.png';


const Service = () => {
    return (
        <>
            <div className="service">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="ServiceHead text-center">
                                <h2 className='section-subtitle mb-0 pb-0'>Services</h2>
                                <div><img alt="Mortgage Brokers Toronto" height="2" src={Titleimg} width="77" /></div>
                                <h2 className='section-title'>What We Provide</h2>
                            </div>
                        </Col>
                    </Row>
                    <div className='card-main mt-3'>
                        <div className="card-wrapper">
                            <div className="card cd-1">
                                <a href="#">
                                    <img src={Card} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>mortgage Refinance</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- Column -----*/}
                        <div className="card-wrapper">
                            <div className="card cd-2">
                                <a href="#">
                                    <img src={CardTow} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>Home Purchase</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- Column -----*/}
                        <div className="card-wrapper">
                            <div className="card cd-3">
                                <a href="#">
                                    <img src={CardThree} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>Self Employed <br /> Mortgage</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- Column -----*/}
                        <div className="card-wrapper">
                            <div className="card cd-4">
                                <a href="#">
                                    <img src={CardFour} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>Home Equity Line <br /> Of Credit</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- Column -----*/}
                        <div className="card-wrapper">
                            <div className="card cd-5">
                                <a href="#">
                                    <img src={CardFive} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>Investment Property <br /> Mortgage</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*----- Column -----*/}
                        <div className="card-wrapper">
                            <div className="card cd-6">
                                <a href="#">
                                    <img src={CardSix} alt="" />
                                    <div className="discription">
                                        <h2 className='section-subtitle'>Reverse Mortgage</h2>
                                        <hr className='line' />
                                        <button className='button'><a href="#">Learn More</a></button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Service;