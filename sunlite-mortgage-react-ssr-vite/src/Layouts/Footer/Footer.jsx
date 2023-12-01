import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='mt-5'>
        <Container>
          <Row className="gy-4">
            <Col lg="3" md="6" sm="12">
              <h4>links</h4>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/refinance">Mortgage Refinance</Link></li>
                <li><Link to="/purchase">Home Purchase</Link></li>
                <li><Link to="/employed">Self Employed Mortgage</Link></li>
                <li><Link to="/credit">Home Equity Line Of Credit</Link></li>
                <li><Link to="/invesment">Investment Property Mortgage</Link></li>
                <li><Link to="/reverse">Reverse Mortgage</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </Col>
            <Col lg="3" md="6" sm="12">
              <h4>FOLLOW US</h4>
              <Row>
                <Col>
                  <ul className='social-icon'>
                    <li><a href='/https://www.facebook.com/sunlitemortgage/'><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href='http://www.twitter.com/sunlitemortgage'><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href='https://www.linkedin.com/sunlitemortgagealliance'><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href='https://www.instagram.com/sunlitemortgage/'><i className="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href='https://www.yelp.com/biz/sunlite-mortgage-alliance-north-york'><i className="fa-brands fa-yelp"></i></a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6">
              <h4>SUBSCRIBE</h4>
              <a href="#" className='button'>join our mailing list</a>
            </Col>
            <Col lg="3" md="6" sm="12">
              <h4>CONTACT US</h4>
              <ul className='contactInfo'>
                <li className='mb-2'>
                  <a href="#">1 Concorde Gate, Suite 702, <br />Toronto, ON M3C 3N6</a>
                </li>
                <li>
                  <a href="#">Local (647) 361-8443</a> <br />
                  <a href="#">LD (877) 385-6267</a> <br />
                  <a href="#">Fax (877) 236-0243</a>
                </li>
                <li>
                  <a href="#">info@sunlitemortgage.com</a>
                  <a href="#">MON - FRI - 08:30 AM - 07:00 PM</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="copy-write">
          <span>© 2022 Sunlite Mortgage. Powered By  <a href="http://webware.io/">Webware.io</a></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;