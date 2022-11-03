import React from 'react';
import Title from '../Components/Title/Title';
import Contact from '../Components/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import Topbar from '../Layouts/Topbar/Topbar';
import HeadTag from '../Components/HeadTag/HeadTag';

const ContactPage = () => {
    // title 
    const titleObj = {
        title: 'Contact Sunlite Mortgage',
        subtitle: 'Mortgage Specialists Toronto | Mortgage Agents Toronto',
        position: true,
    }
    const HeadTagInfo = {
        title: 'Contact Us',
    }
    return (
        <div>
          <HeadTag tagInfo={HeadTagInfo}/>
          <Topbar />
           <NavigationBar />
            <Title titleInfo={titleObj}/>
            <Contact />
           <Footer /> 
        </div>
    );
};

export default ContactPage;