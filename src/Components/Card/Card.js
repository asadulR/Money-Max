import React from 'react';
import CardFeaturs from './CardFeaturs';
import CardTop from './CardTop';
import SendMoney from './SendMoney';

const Card = () => {
    return (
        <main>
            <CardTop/>
            <CardFeaturs/>
            <SendMoney/>
        </main>
    );
};

export default Card;