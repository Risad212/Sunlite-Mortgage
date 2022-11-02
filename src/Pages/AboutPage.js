import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import About from '../Layouts/About/About';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import { Helmet } from 'react-helmet';
const AboutPage = () => {
  // aboutpage title info
  const aboutInfo = {
    title: 'About Sunlite Mortgage',
    subtitle: 'Licensed Mortgage Agents in Toronto, Ontario',
    page: 'about'
   }
    return (
        <div>
          <Helmet>
                <title>about</title>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="This ultimate guide cover all the important aspects of blogging. Find out how to set up a succesful blog or to make yours even better!"/>
          </Helmet>
          <Topbar />
          <NavigationBar />
          <About abInfo={aboutInfo}/>
          <Solutation display="block"/>
          <Footer />
        </div>
    );
};

export default AboutPage;