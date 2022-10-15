import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                <li>Home</li>
                <li>About</li>
                <li>Mortgage Refinance</li>
                <li>Home Purchase</li>
                <li>Employed Mortgage</li>
                <li>Home Equity Line Of Credit</li>
                <li>Reverse Mortgage</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col lg="3" md="6" sm="12">
              <h4>FOLLOW US</h4>
              <ul className='social-icon'>
                <li><i class="fa-brands fa-square-facebook"></i></li>
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-square-instagram"></i></li>
                <li><i class="fa-brands fa-yelp"></i></li>
              </ul>
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
          <span>© 2022 Sunlite Mortgage. Powered By  <a href="#">Webware.io</a></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;