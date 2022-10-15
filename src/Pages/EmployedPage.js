import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import CommonTItle from '../Components/CommonTItle/CommonTItle';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import ServiceBg from '../Components/ServiceBg/ServiceBg';
import Content from '../Components/Content/Content';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import empImg from '../assets/Media/emp.jpg';

const EmployedPage = () => {
    const aboutInfo = {
        img: empImg,
        title: 'Self-Employed Mortgage',
        disc:  `If you are self-employed, you may find it challenging to get a conventional mortgage to purchase a home. Lenders usually require extensive paperwork, proof of income, credit reports, and other documentation to secure their investment.
        As a self-employed individual, you declare your earnings differently, this may not always fit standard lender requirements. This does not mean that you should give up on your dream home. Yes, the process is overwhelming, but we’re here to help you find the right financing for your purchase.`,
      }

      // common title 
    const commonTitle ={
        title: 'Self-Employed Mortgage Services',
        subtitle: 'Mortgage Advisors /Specialists in Toronto, ON',
        position: true,
      }

    // service bg
    const serviceBg = {
      titleOne: 'What Is A Self-Employed Mortgage?',
      disc: 'A self-employed mortgage is specifically designed for people that run their own businesses. These mortgages will have different requirements than traditional mortgages to accommodate the needs of self-employed persons. It is best to seek the advice of an experienced mortgage specialist to help you understand the process and get the right mortgage fit.',
      titleTow: 'Finding The Right Mortgage',
      parag: 'Sunlite Mortgage Alliance is committed to helping people find the right mortgage financing that aligns with their needs. Buying a home is a huge investment and we want to help you achieve it. We understand the needs of self-employed people and work with a network of lenders to find tailored solutions for your situation. Here are some of the ways we can help you -',
      list: [
        'Find the most competitive rates from multiple lenders',
        'Get tailored mortgage solutions for your specific needs',
        'Comprehensive guidance throughout the mortgage process',
        'Work with experienced and licensed mortgage agents',
        'Professional advice to understand your options and find the right mortgage fit for your needs',
     ],
      page: 'employed',
    }

    const contentInfo = {
      disc: 'We’ll help you with every requirement and look through every detail to ensure you stand to benefit the most from the entire mortgage process. Whether you are self-employed or do not qualify for a traditional mortgage, speak with our mortgage agents. We’ll help you understand your options and get you closer to owning your dream home.',
      shortDisc: 'Are you finding it difficult to secure a mortgage because you are self-employed? Connect with us to find the right financing options for your home.',
    }
    return (
        <div>
            <Topbar />
            <NavigationBar />
            <CommonTItle titleInfo={commonTitle}/>
            <ServiceAbout abinfo={aboutInfo} />
            <ServiceBg info={serviceBg}/>
            <Content ctInfo={contentInfo}/>
            <Solutation display="block"/>
            <Footer />
        </div>
    );
};

export default EmployedPage;