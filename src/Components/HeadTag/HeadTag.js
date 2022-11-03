import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTag = ({tagInfo}) => {
    const {title} = tagInfo
    return (
        <div>
           <Helmet>
               <title>{title}</title>
               <meta name="description" content="Please contact us to learn how we can approve your mortgage today 1-877-385-6267 and we will get you approved for a mortgage." />
                <meta name="keywords" content="Sunlite Mortgage Agents are some of the best trained mortgage agents in Canada and operate by the highest standard of mortgage brokering. In every situation" />
                <meta name="author" content="Risad" />
                <meta name="publisher" content="Publisher" />
                <link rel="canonical" href="https://sunlitemortgage.ca" />
                <link rel="alternate" href="https://sunlitemortgage.ca/" />
          </Helmet> 
        </div>
    );
};

export default HeadTag;