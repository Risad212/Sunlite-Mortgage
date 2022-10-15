import React from 'react';
import CommonTItle from '../Components/CommonTItle/CommonTItle';
import Contact from '../Components/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import Topbar from '../Layouts/Topbar/Topbar';

const ContactPage = () => {

    // title 
    const commonTitle = {
        title: 'Contact Sunlite Mortgage',
        subtitle: 'Mortgage Specialists Toronto | Mortgage Agents Toronto',
        position: true,
    }
    return (
        <div>
          <Topbar />
           <NavigationBar />
            <CommonTItle titleInfo={commonTitle}/>
            <Contact />
           <Footer /> 
        </div>
    );
};

export default ContactPage;