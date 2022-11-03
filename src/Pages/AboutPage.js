import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import About from '../Layouts/About/About';
import Solutation from '../Layouts/Solutation/Solutation';
import Footer from '../Layouts/Footer/Footer';
import { Helmet } from 'react-helmet';
const AboutPage = () => {
  // aboutpage title info
  const aboutInfo = {
    title: 'About Sunlite Mortgage',
    subtitle: 'Licensed Mortgage Agents in Toronto, Ontario',
    page: 'about'
   }
    return (
        <div>
          <Helmet>
               <title>Company Overview | The Sunlite Mortgage Story | Ontario Mortgage</title>
               <meta name="description" content="Please contact us to learn how we can approve your mortgage today 1-877-385-6267 and we will get you approved for a mortgage." />
                <meta name="keywords" content="Sunlite Mortgage Agents are some of the best trained mortgage agents in Canada and operate by the highest standard of mortgage brokering. In every situation" />
                <meta name="author" content="Risad" />
                <meta name="publisher" content="Publisher" />
                <link rel="canonical" href="https://sunlitemortgage.ca" />
                <link rel="alternate" href="https://sunlitemortgage.ca/" />
          </Helmet>
          <Topbar />
          <NavigationBar />
          <About abInfo={aboutInfo}/>
          <Solutation display="block"/>
          <Footer />
        </div>
    );
};

export default AboutPage;