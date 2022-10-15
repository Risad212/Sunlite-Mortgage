import React from 'react';

const TitleList = ({item}) => {
    return (
        <div>
           <li><i class="fa-solid fa-arrow-right-long me-2 pb-2" style={{color:'#FEAA36'}}></i>{item}</li>
        </div>
    );
};

export default TitleList;