import React from 'react';
import HeadTag from '../Components/HeadTag/HeadTag';
import About from '../Layouts/About/About';
import Banner from '../Layouts/banner/Banner';
import Blog from '../Layouts/Blog/Blog';
import Contact from '../Layouts/Contact/Contact';
import Service from '../Layouts/Service/Service';
import Solutation from '../Layouts/Solutation/Solutation';


const HomePage = () => {
    // about info
    const aboutInfo = {
      title: 'Sunlite Mortgage',
      subtitle: 'Mortgage Brokers in Toronto, Ontario',
      page: 'home'
    }

    const HeadTagInfo = {
      title: 'Home',
      metaDis: 'Sunlite Mortgage Agents are some of the best trained mortgage agents in Canada and operate by the highest standard of mortgage brokering. In every situation',
      metaKey: 'Meta keyword for HomePage',
    }
    return (
        <div>
           <HeadTag tagInfo={HeadTagInfo}/>
           <Banner page="home"/>
           <About abInfo={aboutInfo}/>
           <Service />
           <Contact />
           <Blog />
           <Solutation />
        </div>
    );
};

export default HomePage;