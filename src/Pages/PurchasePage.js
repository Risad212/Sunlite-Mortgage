import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Title from '../Components/Title/Title';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import purImg from '../assets/Media/pur.jpg';
import Paralax from '../Components/Paralax/Paralax';
import Footer from '../Layouts/Footer/Footer';
import Solutation from '../Layouts/Solutation/Solutation';
import Content from '../Components/Content/Content';

const PurchasePage = () => {
   // service info 
    const aboutInfo = {
      img: purImg,
      title: 'Home Purchase',
      disc:  `Purchasing a home is both exciting and nerve-racking. At Sunlite Mortgage Alliance, we want you to feel     confident with your decision, so we do our best to assist you throughout the process with professional advice and guidance at every step. We do the research for you and present you with the most competitive rates and options tailored to your requirements.
      Finding the right mortgage lender, comparing rates, scrutinizing every term, and other details of the mortgage process can get overwhelming Working with us, you will find that you can breathe a sigh of relief. You will be able to understand your options clearly and find the right mortgage for your new home. We will assist you through the entire process and help you find the right financing for your situation.`,
    }

    // common title 
    const titleObj ={
      title: 'Home Purchase Mortgage Services',
      subtitle: 'Mortgage Advisors /Specialists in Toronto, Ontario',
      position: true,
    }


    // service background info
    const paralaxInfo = {
      disc: 'Refinancing is replacing your existing mortgage with a new loan. The new loan will have different interest rates and payment terms and will pay off your current mortgage balance. When done right, you will end up with additional funds at your disposal for other financial goals. Also, if your finances and credit score have improved since purchasing your home - you will have access to better mortgage options and lower interest rates.',
      list: [
          'Take advantage of lower interest rates',
          'Access home equity',
          'Consolidate debt',
          'Increase cash flow',
          'Cover larger expenses like home renovations',
      ],
      page: 'purchase',
    }
  

    const contentInfo = {
      disc: 'At Sunlite Mortgage Alliance, we make the process easy and convenient for you. Finding the best mortgage rates that work for your situation is what we do. If you are a first-time home buyer, we’ll help you take advantage of the grants and programs available by the federal government. Our experienced mortgage advisors will help you through the entire process, from pre-approval to closing. We help you understand the buying process and how to qualify for the right loan. Based on your income, savings, debt, and credit score, we help you know how much you are eligible for. If you do not qualify for a traditional mortgage, speak to us. We’ll find alternative financing options that work for you.',
      shortDisc: 'Do you have your heart set on buying a home but don’t know where to start? Connect with us to explore your options and find the best mortgage rates.',
    }

    return (
        <div>
          <Topbar />
          <NavigationBar /> 
          <Title titleInfo={titleObj}/>
          <ServiceAbout abinfo={aboutInfo} />
          <Paralax info={paralaxInfo}/>
          <Content ctInfo={contentInfo}/>
          <Solutation display="block"/>
          <Footer />
        </div>
    );
};

export default PurchasePage;