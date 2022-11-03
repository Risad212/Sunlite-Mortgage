import React from 'react';
import About from '../Layouts/About/About';
import Solutation from '../Layouts/Solutation/Solutation';
import HeadTag from '../Components/HeadTag/HeadTag';

const AboutPage = () => {
  // aboutpage title info
  const aboutInfo = {
    title: 'About Sunlite Mortgage',
    subtitle: 'Licensed Mortgage Agents in Toronto, Ontario',
    page: 'about'
   }

   const HeadTagInfo = {
    title: 'about',
  }

    return (
        <div>
          <HeadTag tagInfo={HeadTagInfo}/>
          <About abInfo={aboutInfo}/>
          <Solutation display="block"/>
        </div>
    );
};

export default AboutPage;