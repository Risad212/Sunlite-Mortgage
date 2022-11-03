import React from 'react';
import Title from '../Components/Title/Title';
import Contact from '../Components/Contact/Contact';
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
            <Title titleInfo={titleObj}/>
            <Contact />
        </div>
    );
};

export default ContactPage;