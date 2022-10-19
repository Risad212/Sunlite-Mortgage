import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import Title from '../Title/Title';
import TitleHead from '../TitleHead/TitleHead';
import ParalaxList from '../ParalaxList/ParalaxList';
import './Paralax.css';

const Paralax = ({ info }) => {
    const { titleOne, titleTow, disc, list, parag, page } = info;

    return (
        <>
            <div className="Paralax">
                <Container>
                    {
                        page == 'refine' && (
                            <Row>
                                <Col>
                                    <div className='varLine px-3'>
                                        <Title titleInfo={{title: titleOne}} />
                                        <p>{disc ? disc : ''}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='px-3'>
                                      <Title titleInfo={{title: titleTow}} />
                                        <ul className='titleList mt-3'>
                                            {
                                                list ? (list.map(elem => {
                                                    return <ParalaxList item={elem} />
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
                                                    return <ParalaxList item={elem} />
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
                                      <Title titleInfo={{title: titleOne}} />
                                        <p>{disc ? disc : ''}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='px-3'>
                                      <Title titleInfo={{title: titleTow}} />
                                        <p>{parag ? parag : ''}</p>
                                        <ul className='titleList mt-3'>
                                            {
                                                list ? (list.map(elem => {
                                                    return <ParalaxList item={elem} />
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
                                           <Title titleInfo={{title: titleOne}} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                           <Title titleInfo={{title: titleTow}} />
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <ParalaxList item={elem} />
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
                                            <Title titleInfo={{title: titleOne}} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <ParalaxList item={elem} />
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
                                           <Title titleInfo={{title: titleOne}} />
                                            <p>{disc ? disc : ''}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='px-3'>
                                            <Title titleInfo={{title: titleTow}} />
                                            <ul className='titleList mt-3'>
                                                {
                                                    list ? (list.map(elem => {
                                                        return <ParalaxList item={elem} />
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

export default Paralax;
