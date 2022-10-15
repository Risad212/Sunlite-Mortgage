import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import About from '../Layouts/About/About';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';

const AboutPage = () => {
  // aboutpage title info
  const aboutInfo = {
    title: 'About Sunlite Mortgage',
    subtitle: 'Licensed Mortgage Agents in Toronto, Ontario',
    page: 'about'
   }
    return (
        <div>
          <Topbar />
          <NavigationBar />
          <About abInfo={aboutInfo}/>
          <Solutation display="block"/>
          <Footer />
        </div>
    );
};

export default AboutPage;