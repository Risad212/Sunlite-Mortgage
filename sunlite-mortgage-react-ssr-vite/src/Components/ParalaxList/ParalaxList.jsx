import React from 'react';

const ParalaxList = ({item}) => {
    return (
        <div>
           <li><i className="fa-solid fa-arrow-right-long me-2 pb-2" style={{color:'#FEAA36'}}></i>{item}</li>
        </div>
    );
};

export default ParalaxList;