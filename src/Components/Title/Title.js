import React from 'react';

const Title = ({titleInfo}) => {
    return (
        <div className={titleInfo?.position? "text-center": ''}>
           <h1 class="section-title">{titleInfo?.title}</h1>
           <div><img alt="Mortgage Brokers Toronto" class="line-img" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" /></div>
           <h2 class="section-subtitle">{titleInfo?.subtitle}</h2>
        </div>
    );
};

export default Title;