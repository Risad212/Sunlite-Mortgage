import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import Content from '../Components/Content/Content';
import Paralax from '../Components/Paralax/Paralax';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import Title from '../Components/Title/Title';
import revImg from '../assets/Media/reverse.jpg';

const ReversePage = () => {
     // service info 
     const aboutInfo = {
        img: revImg,
        title: 'Reverse Mortgage',
        disc:  `A financially secure retirement is the difference between enjoying your golden years and stressing over daily expenses. If you are a homeowner above the age of 55, you could consider a reverse mortgage to help with home repairs, healthcare expenses, and anything else you need. But, before you do, talk to us at Sunlite Mortgage Alliance. We know how reverse mortgages work and will help you understand the benefits, restrictions, and everything in between.
        We are committed to helping you get the most out of your mortgage with the best rates and professional advice. We’ll sit down with you and explain what you stand to benefit as well as every disadvantage. You will be able to understand your options and make a well-informed decision.`
      }

    const titleObj = {
        title: 'Reverse Mortgage Services',
        subtitle: 'Mortgage Advisors / Agents in Toronto, Ontario',
        position: true,
    }

    // paralax background page information
    const paralaxInfo = {
        titleOne: 'What Is A Reverse Mortgage?',
        disc: 'With a reverse mortgage, you borrow funds from a lender against a portion of your home equity. Unlike a regular mortgage, where you make regular payments to the lender, the lender pays you. You do not have to sell your home and can continue to live there. The amount you can borrow depends on factors like age, home value, and the lender. The loan does not have to be repaid until the last borrower vacates the property, sells the home, or passes away. When this happens, either the heirs of the home can repay the lender to keep the home or the home is sold to repay the loan. The proceeds go to the homeowner’s estate if the house sells for more than the loan amount and its associated costs.',
        titleTow: 'Homeowners Usually Consider A Reverse Mortgage For The Following Reasons',
        list: [
            'Cover medical / healthcare expenses',
            'Repay any outstanding debts',
            'Home renovation and repairs',
            'Create a stream of income for any other expenses',
            'You still own and live in your home while reaping the benefits',
            'You do not have to pay tax on the money borrowed',
        ],
        page: 'reverse',
    }

    const contentInfo = {
        disc: 'While there can be many benefits from reverse mortgages, there are drawbacks too. This includes a higher interest rate and a decrease in equity. Come talk to our mortgage experts at Sunlite Mortgage Alliance. We will help you understand how a reverse mortgage decreases your home equity and the restrictions involved. We will weigh every pro and con so you can make a confident decision. It is essential to be aware of any fees or hidden terms and know what can cause you to default. At Sunlite Mortgage Alliance, we ask the questions for you so that you stand to benefit the most from your mortgage. We will evaluate every detail and advise you whether a reverse mortgage is the right option for you. We know it can be challenging to navigate this alone; that’s why we are here to help you.',
        shortDisc: 'Are you considering a reverse mortgage? We’re here to help. Connect with us to understand your options and take the right step towards a financially secure future.',
      }
    return (
        <div>
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

export default ReversePage;