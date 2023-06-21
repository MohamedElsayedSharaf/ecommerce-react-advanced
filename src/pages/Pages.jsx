import React from 'react';
import Home from '../components/MainPage/Home'
import FlashDeals from '../components/FlashDeals/FlashDeals';
import TopCate from '../components/Top/TopCate';
import New from '../components/NewArrivals/new';
import Discount from '../components/Discount/Discount';
import Shop from '../components/Shop/Shop';
import Ann from '../components/Annoucements/Ann';
import Wrapper from '../components/Wrapper/Wrapper';
import Footer from '../components/Footer/Footer';

const Pages = ({productItems, CartItem, addToCart, shopItems}) => {
    return (
        <>
            <Home CartItem={CartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <New />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Ann />
            <Wrapper />
            <Footer />
        </>
    );
}

export default Pages;
