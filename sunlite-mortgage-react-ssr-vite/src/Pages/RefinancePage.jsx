import React from 'react';
import Solutation from '../Layouts/Solutation/Solutation';
import Banner from '../Layouts/banner/Banner';
import ServiceAbout from '../Components/ServiceAbout/ServiceAbout';
import Paralax from '../Components/Paralax/Paralax';
import Content from '../Components/Content/Content';
import refImg from '../assets/Media/ref.jpg';
import HeadTag from '../Components/HeadTag/HeadTag';


const RefinancePage = () => {
    // about info
    const aboutInfo = {
        img: refImg,
        title: 'Mortgage Refinances',
        disc:  `As a homeowner, you can choose to refinance your property for several
        reasons - to take advantage of lower interest rates,
        tap into home equity, or consolidate debt.
        While refinancing can be highly beneficial, you need to make sure it makes financial sense for your situation. Sometimes, the costs of switching to a new lender can outweigh the benefits of refinancing. Connect with us at Sunlite Mortgage Alliance to understand your options and get the most out of your refinance.`,
      }
    
      // service background info
      const paralaxInfo = {
        titleOne: 'What Is Mortgage Refinancing?',
        titleTow: 'Benefits Of Refinancing Your Mortgage',
        disc: 'Refinancing is replacing your existing mortgage with a new loan. The new loan will have different interest rates and payment terms and will pay off your current mortgage balance. When done right, you will end up with additional funds at your disposal for other financial goals. Also, if your finances and credit score have improved since purchasing your home - you will have access to better mortgage options and lower interest rates.',
        list: [
            'Take advantage of lower interest rates',
            'Access home equity',
            'Consolidate debt',
            'Increase cash flow',
            'Cover larger expenses like home renovations',
        ],
        page: 'refine',
      }

      // content info
      const contentInfo = {
        title: 'Connect With Our Mortgage Experts',
        disc: 'At Sunlite Mortgage Alliance, we will assess your current financial situation and help you understand whether refinancing is the right choice. We’ll break down the costs and penalties of refinancing and weigh them against the benefits. Our mortgage experts will evaluate every detail to ensure you benefit from the process and save more in the long run. We will also help you understand how to borrow funds against your home equity. Trust our experienced mortgage agents to find the most competitive rates and guide you through the entire process.',
        shortDisc: 'Are you considering refinancing your mortgage? Talk to us before you do. We’ll advise you on the right way forward.',
        position: true,
      }

      const HeadTagInfo = {
        title: 'Refinance',
      }
    return (
        <div>
           <HeadTag tagInfo={HeadTagInfo}/>
           <Banner page="refinance"/>
           <ServiceAbout abinfo={aboutInfo} />
           <Paralax info={paralaxInfo}/>
           <Content ctInfo={contentInfo}/>
           <Solutation display="block"/>
        </div>
    );
};

export default RefinancePage;