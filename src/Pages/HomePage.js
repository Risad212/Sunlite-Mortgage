import React from 'react';
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