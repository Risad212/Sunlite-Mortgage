import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CommonTItle from '../CommonTItle/CommonTItle';
import './ServiceAbout.css';


const ServiceAbout = ({abinfo}) => {
  return (
    <div className='py-5'>
      <Container>
        <Row>
          <Col lg="6" className='d-flex justify-content-end'>
            <img src={abinfo?.img} alt="" />
          </Col>
          <Col lg="6" className='d-flex align-items-center'>
            <div>
              <CommonTItle titleInfo={abinfo}/>
              <p className='mt-2'>{abinfo?.disc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceAbout;