import React from 'react';
import Topbar from '../Layouts/Topbar/Topbar';
import NavigationBar  from '../Layouts/NavigationBar/NavigationBar';
import Footer from '../Layouts/Footer/Footer';
import Banner from '../Layouts/banner/Banner';
import Blog from '../Components/Blog/Blog';

const BlogPage = () => {
    return (
        <div>
          <Topbar />
           <NavigationBar /> 
           <Banner page="blog"/>
           <Blog />
           <Footer />
        </div>
    );
};

export default BlogPage;