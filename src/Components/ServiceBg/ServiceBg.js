import React, { useState } from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import Title from '../Title/Title';
import TitleHead from '../TitleHead/TitleHead';
import TitleList from '../TitleList/TitleList';
import './ServiceBg.css';

const ServiceBg = ({ info }) => {
    const { titleOne, titleTow, disc, list, parag, page } = info;

    return (
        <>
            <div className="ServiceBg">
                <Container>
                    {
                        page == 'refine' && (
                            <Row>
                                <Col>
                                    <div className='varLine px-3'>
                                        <Title titleInfo={null} />
                                        <p>{disc ? disc : ''}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='px-3'>
                                        <Title titleInfo={null} />
                                        <ul className='titleList mt-3'>
                                            {
                                                list ? (list.map(elem => {
                                                    return <TitleList item={elem} />
                                                })) : (
                                                    ''
                                                )
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    {
                        page == 'purchase' && (
                            <Row>
                                <Col>
                                    <div className='px-3'>
                                        <p>{disc ? disc : ''}</p>
                                        <ul className='titleList mt-3'>
                                            {
                                                list ? (list.map(elem => {
                                                    return <TitleList item={elem} />
                                                })) : (
                                                    ''
                                                )
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    {
                        page == 'employed' && (
                            <Row>
                                <Col className='d-flex align-items-center'>
                                    <div className='varLine px-3 BHeight'>
                                        <TitleHead title={titleOne ? titleOne : ''} />
                                        <p>{disc ? disc : ''}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='px-3'>
                                        <TitleHead title={titleTow ? titleTow : ''} />
                                        <p>{parag ? parag : ''}</p>
                                        <ul className='titleList mt-3'>
                                            {
                                                list ? (list.map(elem => {
                                                    return <TitleList item={elem} />
                                                })) : (
                                                    ''
                                                )
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {
                            page == 'credit' && (
                                <Row>
                                    <Col>
                                        <div className='varLine px-3'>
                                            <TitleHead title={titleOne ? titleOne : ''} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                            <TitleHead title={titleTow ? titleTow : ''} />
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <TitleList item={elem} />
                                                    })) : (
                                                        ''
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {
                            page == 'investment' && (
                                <Row>
                                    <Col>
                                        <div className='varLine px-3 sHeight'>
                                            <TitleHead title={titleOne ? titleOne : ''} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <TitleList item={elem} />
                                                    })) : (
                                                        ''
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {
                             page == 'reverse' && (
                                <Row>
                                    <Col>
                                        <div className='varLine px-3'>
                                            <TitleHead title={titleOne ? titleOne : ''} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                            <TitleHead title={titleTow ? titleTow : ''} />
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <TitleList item={elem} />
                                                    })) : (
                                                        ''
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            )}
                </Container>
            </div>
        </>
    );
};

export default ServiceBg;
