import React from 'react';
import { Helmet } from 'react-helmet';

const HeadTag = ({tagInfo}) => {
    const {title, metaDis,metaKey} = tagInfo
    return (
        <div>
           <Helmet>
               <title>{title}</title>
               <meta name="description" content={metaDis} />
                <meta name="keywords" content={metaKey} />
                <meta name="author" content="Risad" />
                <meta name="publisher" content="Publisher" />
                <link rel="canonical" href="https://sunlitemortgage.ca" />
                <link rel="alternate" href="https://sunlitemortgage.ca/" />
          </Helmet> 
        </div>
    );
};

export default HeadTag;