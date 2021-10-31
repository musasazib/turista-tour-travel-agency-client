import React from 'react';
import Footer from '../../Shared/Header/Footer/Footer';
import WhyChoose from '../../WhyChoose/WhyChoose';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </div>
    );
};

export default Home;