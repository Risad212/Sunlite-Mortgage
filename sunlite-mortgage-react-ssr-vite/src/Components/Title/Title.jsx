import React from 'react';

const Title = ({titleInfo}) => {
    return (
        <div className={titleInfo?.position? "text-center": ''}>
           <h1 className="section-title">{titleInfo?.title}</h1>
            {titleInfo?.title? (<div><img alt="Mortgage Brokers Toronto" className="line-img" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" /></div>): <></>}
           <h2 className="section-subtitle">{titleInfo?.subtitle}</h2>
        </div>
    );
};

export default Title;