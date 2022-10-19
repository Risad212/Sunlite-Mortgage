import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cta from '../../assets/Media/ct.png';

const Contact = () => {
    return (
        <>
            <div className="py-5">
                <Container>
                    <Row>
                        <Col lg="6" className='d-flex align-items-center'>
                            <div className="AboutHead mt-3 py-5">
                                <h2 className='section-subtitle pb-0 mb-0'>Contact Us</h2>
                                <div><img alt="Mortgage Brokers Toronto" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" class="line-img" /></div>
                                <h2 className='section-title'>Working With Over 100 Mortgage Lenders</h2>
                                <p className='py-3'>Looking to transfer a mortgage, or refinancing an existing mortgage to consolidate debt, our team of mortgage agents can help you find the best mortgage solution.</p>
                                <Link to="/contact" className='button px-5'>Call Now</Link>
                            </div>
                        </Col>
                        <Col lg="6">
                            <Link to="/contact">
                                <img src={cta} alt="" className='img-fluid' />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Contact;