import React from 'react';
import { Helmet } from 'react-helmet-async';
import CardFeaturs from './CardFeaturs';
import CardTop from './CardTop';
import ChooseUs from './ChooseUs';
import SendMoney from './SendMoney';

const Card = () => {
    return (
        <main>
            <Helmet>
                <title>Cards - Money-Max</title>
            </Helmet>
            <CardTop/>
            <CardFeaturs/>
            <SendMoney/>
            <ChooseUs/>
        </main>
    );
};

export default Card;