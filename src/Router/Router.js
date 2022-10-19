import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from '../Pages/AboutPage';
import BlogPage from '../Pages/BlogPage';
import ContactPage from '../Pages/ContactPage';
import CreditPage from '../Pages/CreditPage';
import EmployedPage from '../Pages/EmployedPage';
import HomePage from '../Pages/HomePage';
import InvestmentPage from '../Pages/InvestmentPage';
import PurchasePage from '../Pages/PurchasePage';
import Refinance from '../Pages/RefinancePage'
import ReversePage from '../Pages/ReversePage';

const Router = () => {
    return (
        <BrowserRouter>
           <Routes>
             <Route exact path='/' element={<HomePage />} />
             <Route path='/home' element={<HomePage />} />
             <Route path='/about' element={<AboutPage />} />
             <Route path='/refinance' element={<Refinance />} />
             <Route path='/purchase' element={<PurchasePage />} />
             <Route path='/employed' element={<EmployedPage />} />
             <Route path='/credit' element={<CreditPage />} />
             <Route path='/invesment' element={<InvestmentPage />} />
             <Route path='/reverse' element={<ReversePage />} />
             <Route path='/blog' element={<BlogPage />} />
             <Route path='/contact' element={<ContactPage />} />
           </Routes>
        </BrowserRouter>
    );
};

export default Router;