import React from 'react';
import CardFeaturs from './CardFeaturs';
import CardTop from './CardTop';
import ChooseUs from './ChooseUs';
import SendMoney from './SendMoney';

const Card = () => {
    return (
        <main>
            <CardTop/>
            <CardFeaturs/>
            <SendMoney/>
            <ChooseUs/>
        </main>
    );
};

export default Card;