import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import Content from '../Components/Content/Content';
import Paralax from '../Components/Paralax/Paralax';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import Title from '../Components/Title/Title';
import crditImg from '../assets/Media/credit.pg.jpg';

const CreditPage = () => {
     // service info 
     const aboutInfo = {
        img: crditImg,
        title: 'Home Equity Line Of Credit',
        disc:  `A home equity line of credit (HELOC) allows you to borrow funds against the value of your home. A HELOC is a secured loan with your home equity as collateral.
        It can be used for any type of investment or purchase. It is more flexible than most other loans and allows you to borrow any amount up to your limit. You only pay interest on the amount withdrawn and can choose when and how you repay the loan without additional penalties.`
      }

    // title info
    const titleObj = {
        title: 'Home Equity Line of Credit Services',
        subtitle: 'Mortgage Advisors / Agents in Toronto, Ontario',
        position: true,
    }
    
    // serviceBg
    const ParalxInfo = {
        titleOne: 'What Is Home Equity?',
        titleTow: 'Benefits Of A Home Equity Line Of Credit',
        disc: 'When you take out a mortgage on your home, you repay the lender through smaller payments over a period of years. As you repay the loan, your home equity increases. The amount of equity you have will depend on the current market value of your home minus the amount of any outstanding loans against the property. Unlike other loans, you can borrow as much as you need (up to your limit) whenever you need it without repeating the approval process.',
        list: [
            'Finance home repairs and renovation',
            'Debt consolidation',
            'Investment opportunities',
            'Cover large expenses like higher education or healthcare',
            'Borrow funds at lower interest rates with flexible payment options',
        ],
        page: 'credit',
    }

    const contentInfo = {
        disc: 'At Sunlite Mortgage Alliance, we help you access the right type of financing to improve your life and secure your future. We have helped numerous homeowners understand how home equity works and how they can use it to their advantage. As experienced mortgage advisors, we guide you through the entire process, explain every requisite, assist you with the paperwork, and ensure you benefit the most. You get financial clarity, professional advice, and a smooth and easy approval process.',
        shortDisc: 'Are you looking to tap into your home equity? We’ll help you understand your options and guide you through the process.',
      }
    return (
        <div>
           <Topbar />
           <NavigationBar />
           <Title titleInfo={titleObj}/>
           <ServiceAbout abinfo={aboutInfo}/> 
           <Paralax info={ParalxInfo}/>
           <Content ctInfo={contentInfo}/>
           <Solutation display="block"/>
           <Footer />
        </div>
    );
};

export default CreditPage;