import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Solutation.css';
import Slider from 'react-slick';
import Title from '../../Components/Title/Title';
import { Link } from 'react-router-dom';

const Solutation = ({display}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const soluTitle = {
    title: 'Best Mortgage Solutions across',
    position: true,
  }
  return (
    <div className='py-5'>
      <Container>
        <div className='soltitle'>
          <Title titleInfo={soluTitle}/>
        </div>
        <Slider {...settings}>
          <div className='slider mt-5'>
            <Row className="gy-3">
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
            </Row>
          </div>
          {/* second slider ------*/}
          <div className='slider mt-5'>
            <Row className='3'>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
              <Col lg="3" md="6" sm="6">
                <ul>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Ajax</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Amhersturg</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Auorora</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Barrie</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bellevile</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bracebridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Bradform web Gwillimbury</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brampton</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brant</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brandfor</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Brockville</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Burlington</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Caledon</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Cambridge</li>
                    <li><i className="fa-solid fa-arrow-right-long me-2"></i>Central Elgin</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Slider>
         {display == 'block'? (
           <div className="ctaBtn mt-5 text-center">
             <button className='button'><Link to="/contact">Contact Sunlite Mortgage Brokers in Toronto, ON</Link></button>
          </div>
         ): ''}
       
      </Container>
    </div>
  );
};

export default Solutation;