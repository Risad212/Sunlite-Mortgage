import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import bwImg from '../../assets/Media/bwImg.png';


const Blog = () => {
    // category list
    const bgCatlist = ['Categories', 'Bad Credit Mortgage', 'Bruised Credit', 'Commercial Mortgage', 'Construction Mortgage', 'Debt Consolidation Mortgage', 'First-Time Home Buyers', 'Home Equity Line Of Credit', 'Home Equity Loan', 'Home Improvement Mortgage']

    // tag list 
    const bgTaglist = ['Bad Credit Mortgage', 'Bruised Credit', 'Commercial Mortgage', 'Construction Mortgage', 'Debt Consolidation Mortgage', 'First-Time Home Buyers', 'Home Equity Line Of Credit']

    // recent post list
    const recPsList = ['Announcing The New Website'];

    return (
        <>
            <Container>
                <Row className='p-5'>
                    <Col lg="9">
                        <div className="BlogWidget">
                            <h1 className="wTitle">
                                <a href="#">ANNOUNCING THE NEW WEBSITE</a>
                            </h1>
                            <ul className='d-flex lab-ul'>
                                <li className='me-3'><i class="fa-solid fa-user pe-2"></i>Sunlite Mortgage</li>
                                <li><i class="fa-solid fa-calendar-days pe-2"></i>Oct 07, 2022</li>
                            </ul>
                            {/*--- Widget category--- */}
                            <ul className='wt-cat'>
                                <p className='d-inline'><i class="fa-sharp fa-solid fa-tag"></i></p>
                                {
                                    bgCatlist.map(elem => {
                                        return <li>{elem}</li>
                                    })
                                }
                            </ul>
                            {/*--- Social icon --- */}
                            <ul className='social'>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                            {/*--- blog weidget image --- */}
                            <div className='w-img'>
                                <img src={bwImg} className='img-fluid' alt="" />
                                <p className='my-3'>We are delighted to announce the launch of our new website!</p>
                                <button className='button'><a href="#">Click Here To Read The Full Article</a></button>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="sidebarWidget">
                            <h1 className="wTitle">
                                <a href="#">TAGS</a>
                            </h1>
                            <ul className='tagList'>
                                {bgTaglist.map(elem => {
                                    return <li><a href="#">{elem}</a></li>
                                })}
                            </ul>
                        </div>
                        <div className="recentPost mt-3">
                            <h1 className="wTitle">
                                <a href="#">RECENT POSTS</a>
                             </h1>
                             <ul className='tagList'>
                                {recPsList.map(elem => {
                                    return <li><a href="#">{elem}</a></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blog;