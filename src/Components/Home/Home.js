import React from 'react';
import FastLoan from './FastLoan/FastLoan';
import HomeTopBanner from './HomeTopBanner/HomeTopBanner';

const Home = () => {
    return (
        <main>
            <HomeTopBanner/>
            <FastLoan/>
        </main>
    );
};

export default Home;