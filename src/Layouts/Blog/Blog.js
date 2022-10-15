import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <>
         <div className="blog my-5">
           <Container>
             <Row>
                <Col lg="6" md="8" sm="10" xs="10">
                   <div className="blogBox">
                      <a href="#">
                         <h2 className="section-subtitle">latest</h2>
                         <hr className='line'/>
                         <h2 className="section-title">Blog Post</h2>
                         <a href='#' className='button'>learn More</a>
                      </a>
                   </div>
                </Col>
             </Row>
           </Container>
         </div> 
        </>
    );
};

export default Blog;