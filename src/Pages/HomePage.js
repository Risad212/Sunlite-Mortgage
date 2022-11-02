import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../Layouts/About/About';
import Banner from '../Layouts/banner/Banner';
import Blog from '../Layouts/Blog/Blog';
import Contact from '../Layouts/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Service from '../Layouts/Service/Service';
import Solutation from '../Layouts/Solutation/Solutation';
import Topbar from '../Layouts/Topbar/Topbar';

const HomePage = () => {
    // about info
    const aboutInfo = {
      title: 'Sunlite Mortgage',
      subtitle: 'Mortgage Brokers in Toronto, Ontario',
      page: 'home'
    }
    return (
        <div>
          <Helmet>
                <title>home</title>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="welcome about page"/>
          </Helmet>
           <Topbar />
           <NavigationBar />
           <Banner page="home"/>
           <About abInfo={aboutInfo}/>
           <Service />
           <Contact />
           <Blog />
           <Solutation />
           <Footer />
        </div>
    );
};

export default HomePage;