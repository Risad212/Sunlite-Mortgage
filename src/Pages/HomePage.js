import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../Layouts/About/About';
import Banner from '../Layouts/banner/Banner';
import Blog from '../Layouts/Blog/Blog';
import Contact from '../Layouts/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Service from '../Layouts/Service/Service';
import Solutation from '../Layouts/Solutation/Solutation';
import Topbar from '../Layouts/Topbar/Topbar';

const HomePage = () => {
    // about info
    const aboutInfo = {
      title: 'Sunlite Mortgage',
      subtitle: 'Mortgage Brokers in Toronto, Ontario',
      page: 'home'
    }
    return (
        <div>
          <Helmet>
                <title>Mortgage Broker in North York, Toronto, Ontario | Sunlite Mortgage</title>
                <meta name="description" content="Best Mortgage Broker: At sunlite mortgage, we work with top-class brokers for over three decades and have a clear track record of putting deals and relationships together." />
                <meta name="keywords" content="Songbad Prokash, Bangla News, Bangla News Paper, Online Bangla News Portal, Breaking News, National News, Country News, Entertainment News, সংবাদ প্রকাশ, জাতীয়, দেশ, আন্তর্জাতিক, বিনোদন, খেলা, জীবনযাপন, 	স্বাস্থ্য, শিক্ষা, বিজ্ঞান ও প্রযুক্তি, প্রবাস, বই শুনুন, চাকরি চাই" />
                <meta name="author" content="Risad" />
                <meta name="publisher" content="Publisher" />
                <link rel="canonical" href="https://sunlitemortgage.ca" />
                <link rel="alternate" href="https://sunlitemortgage.ca/" />
          </Helmet>
           <Topbar />
           <NavigationBar />
           <Banner page="home"/>
           <About abInfo={aboutInfo}/>
           <Service />
           <Contact />
           <Blog />
           <Solutation />
           <Footer />
        </div>
    );
};

export default HomePage;