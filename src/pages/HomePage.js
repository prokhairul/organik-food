import React from 'react';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Blog from '../components/home/Blog';
import Gallery from '../components/home/Gallery';
import Newslatter from '../components/home/Newslatter';
import Offer from '../components/home/Offer';
import OfferBanner from '../components/home/OfferBanner';
import Shop from '../components/home/Shop';
import Testimonial from '../components/home/Testimonial';
import WhoWe from '../components/home/WhoWe';


const HomePage = () => {
    return (
        <>
            <Banner />
            <OfferBanner />
            <About />
            <Shop />
            <Testimonial />
            <Offer />
            <WhoWe />
            <Gallery />
            <Blog />
            <Newslatter />
        </>
    );
};

export default HomePage;