import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import Content from '../Components/Content/Content';
import Paralax from '../Components/Paralax/Paralax';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import Title from '../Components/Title/Title';
import invesImg from '../assets/Media/invesment.jpg';
import HeadTag from '../Components/HeadTag/HeadTag';

const InvestmentPage = () => {
    // service info 
    const aboutInfo = {
        img: invesImg,
        title: 'Investment Property Mortgage',
        disc:  `Investing in real estate provides you with a reliable source of income from rentals or through capital appreciation. At Sunlite Mortgage Alliance, we have helped many investors successfully purchase investment properties with the best mortgage rates and financing plans.
        If you are looking for an investment property mortgage, we’ll help you find the right lender and the most competitive rates. We do the negotiating for you so that you end up saving more - both time and money.`
      }

    const titleObj = {
        title: 'Investment Property Mortgage Services',
        subtitle: 'Mortgage Advisors / Agents in Toronto, Ontario',
        position: true,
    }

    // service Bg
    const paralaxInfo = {
      titleOne: 'What Is An Investment Property Mortgage?',
      disc: 'An investment property generally means real estate that is purchased with the intent to generate income. Most investment property mortgages require a 20% down payment. This helps you qualify for a longer amortization period of around 30 years. An investment property helps provide -',
      list: [
        'An additional stream of income',
        'Allows you to expand your assets',
        'Money from rentals can help pay off your mortgage or clear other debts',
        'Build equity over time',
      ],
      page: 'investment'
    }

    const contentInfo = {
      title: 'Find The Best Mortgage Rates For Your Investment',
      disc: 'At Sunlite Mortgage Alliance, we help you invest with confidence. We help you gain the most out of your mortgage by negotiating the best rates with multiple lenders on your behalf. As experienced mortgage experts, we evaluate your finances to ensure you have the budget for upfront costs and a smooth approval process. We’ll review every detail and outline personalized solutions that work for your situation. Our mortgage experts take the time to understand your requirements and your current financial situation. They will take into account every detail associated with your purchase to ensure you get the most favorable outcome.',
      shortDisc: 'Are you looking to purchase an investment property? Let us help you find the right mortgage fit for your financial needs.',
    }

    const HeadTagInfo = {
      title: 'Investment Property Mortgage',
    }
    return (
        <div>
           <HeadTag tagInfo={HeadTagInfo}/>
           <Topbar />
           <NavigationBar />
           <Title titleInfo={titleObj}/>
           <ServiceAbout abinfo={aboutInfo}/> 
           <Paralax info={paralaxInfo}/>
           <Content ctInfo={contentInfo}/>
           <Solutation display="block"/>
           <Footer /> 
        </div>
    );
};

export default InvestmentPage;