import React from 'react';
import Banner from '../Layouts/banner/Banner';
import Blog from '../Components/Blog/Blog';
import HeadTag from '../Components/HeadTag/HeadTag';

const BlogPage = () => {

    const HeadTagInfo = {
        title: 'Blog',
      }
    return (
        <div>
          <HeadTag tagInfo={HeadTagInfo}/>
           <Banner page="blog"/>
           <Blog />
        </div>
    );
};

export default BlogPage;