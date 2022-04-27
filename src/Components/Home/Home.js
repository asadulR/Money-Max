import React from 'react';
import Blog from '../Blog/Blog/Blog';
import FastLoan from './FastLoan/FastLoan';
import HomeTopBanner from './HomeTopBanner/HomeTopBanner';
import './Home.css'
const Home = () => {
    return (
        <main className='home-container'>
            <HomeTopBanner/>
            <FastLoan/>
            <Blog/>
        </main>
    );
};

export default Home;