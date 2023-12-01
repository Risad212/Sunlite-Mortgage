import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <>
         <div className="blog my-5">
           <Container>
             <Row>
                <Col lg="6" md="8" sm="10" xs="10">
                   <div className="blogBox">
                      <Link to="/blog">
                         <h2 className="section-subtitle">latest</h2>
                         <hr className='line'/>
                         <h2 className="section-title">Blog Post</h2>
                         <Link to='/blog' className='button'>learn More</Link>
                      </Link>
                   </div>
                </Col>
             </Row>
           </Container>
         </div> 
        </>
    );
};

export default Blog;