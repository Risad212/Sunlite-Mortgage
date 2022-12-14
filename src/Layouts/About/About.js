import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/Media/about.png';
import titleImg from '../../assets/Media/title.png';
import Title from '../../Components/Title/Title';
import './About.css';

const About = ({abInfo}) => {
   const {title,subtitle,page} = abInfo;
    return (
        <>
         <Container>
             <Row>
               <Col lg="12">
                 <div className="AboutHead mt-3 py-5 text-center">
                      <Title titleInfo={abInfo}/>
                      {page == 'home'? (<p>Mortgage Refinance, Purchase Plus Improvements, Bad Credit, Construction, Home Equity Loan, Self Employed Mortgage Services & more</p>): <></>}
                      {page == 'home'? (<Link to="/contact" className='ctaBtn button'>Contact Sunlite Mortgage - Toronto Mortgage Agents / Advisors</Link>): <></> }
                 </div>
               </Col>
             </Row>
             <Row className='py-5'>
               <Col lg="6" className='aboutImg'>
                 <a href="#">
                    <img src={aboutImg} alt="" className='img-fluid'/>
                 </a>
               </Col>
               <Col lg="6" className='d-flex align-items-center'>
               <div className="Aboutcontent">
                     {page == 'home'? (<h2 className='section-subtitle mb-0'>About</h2>): ''}
                     {page == 'home'? (<div><img alt="Mortgage Brokers Toronto" height="2" src={titleImg} width="77" className="line-img" /></div>): ''}
                     {page == 'home'? (<h2 className='section-title'>Sunlite Mortgage</h2>): ''}
                      <p className={page == 'home'? 'w-70' : 'w-80' }>{page == 'home'? ('Sunlite Mortgage Alliance has been providing customized mortgage solutions to Canadian since 2003 and has seen many hanges in the mortgage industry. We work with over 100 mortgage lenders including, banks, credit unions, trust companies, and private lenders to help Canadians...'): (`
                       Mortgage Alliance has been providing customized mortgage solutions to Canadians since 2003 and has seen many changes in the mortgage industry. We work with over 100 mortgage lenders including, banks, crcedit unions, trust companies, and private lenders to help Canadians whether they are first-time home buyers purchasing their first home, new to Canada, looking to transfer a mortgage, or refinancing an existing mortgage to consolidate debt, our team of mortgage agents can help you find the best mortgage solution.`)}</p>
                      {page == 'home'? (<Link to="/about" className='button'>Read More</Link>): <></>}
                 </div>
               </Col>
             </Row>
         </Container>
        </>
    );
};

export default About;