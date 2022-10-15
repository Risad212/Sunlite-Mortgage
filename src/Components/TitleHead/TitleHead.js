import React from 'react';

const TitleHead = ({title}) => {
    return (
        <div>
          <h1 className='section-title'>{title? title: ''}</h1>
          {title? <div><img alt="Mortgage Brokers Toronto" class="line-img" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" /></div>  : ''}
        </div>
    );
};

export default TitleHead;