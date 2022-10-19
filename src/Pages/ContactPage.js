import React from 'react';
import Title from '../Components/Title/Title';
import Contact from '../Components/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import Topbar from '../Layouts/Topbar/Topbar';

const ContactPage = () => {

    // title 
    const Title = {
        title: 'Contact Sunlite Mortgage',
        subtitle: 'Mortgage Specialists Toronto | Mortgage Agents Toronto',
        position: true,
    }
    return (
        <div>
          <Topbar />
           <NavigationBar />
            <Title titleInfo={Title}/>
            <Contact />
           <Footer /> 
        </div>
    );
};

export default ContactPage;