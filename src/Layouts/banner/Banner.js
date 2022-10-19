import React from 'react';
import './Banner.css';
import BgImg from '../../assets/Media/banner.jpg';
import RifImg from '../../assets/Media/refincjpg.jpg';
import blogImg from '../../assets/Media/blogBg.jpg';
import { Link } from 'react-router-dom';

const Banner = ({ page }) => {
    return (
        <>
            {page == 'home' && (
                <div className="banner">
                    <a href="#">
                        <img src={BgImg} alt="" />
                    </a>
                    <div className="bannerDes">
                        <h1 class="banner-title">Providing Customized Mortgage Solutions<br />To Canadians Since 2003</h1>
                        <button className='button'><Link to='/contact'>Get In touch</Link></button>
                    </div>
                </div>
            )}

            {page == 'refinance' && (
                <div className="position-relative">
                    <img src={RifImg} alt="" className='img-fluid' style={{ width: '100%' }} />
                    <div className="refTitle">
                        <h2 className='section-title'>Mortgage Refinance Services</h2>
                        <div><img alt="Mortgage Brokers Toronto" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" class="line-img" /></div>
                        <h2 className='section-subtitle'>Mortgage Brokers / Agents in Toronto, Ontario</h2>
                    </div>
                </div>
            )}

            {page == 'blog' && (
                <div className="position-relative">
                    <img src={blogImg} alt="" className='img-fluid' style={{ width: '100%' }} />
                    <div className="blogTitle">
                        <h2 className='section-title'>Blog by Sunlite Mortgage</h2>
                        <div><img alt="Mortgage Brokers Toronto" height="2" src="//dvm0q8ak413bh.cloudfront.net/data/org/24607/media/img/source/edit/2714851_edit.png" width="77" class="line-img" /></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;