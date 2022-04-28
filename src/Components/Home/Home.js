import React from 'react';
import Blog from '../Blog/Blog/Blog';
import FastLoan from './FastLoan/FastLoan';
import HomeTopBanner from './HomeTopBanner/HomeTopBanner';
import './Home.css'
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <main className='home-container'>
            <Helmet>
                <title>Home - Money Max</title>
            </Helmet>
            <HomeTopBanner/>
            <FastLoan/>
            <Blog/>
        </main>
    );
};

export default Home;