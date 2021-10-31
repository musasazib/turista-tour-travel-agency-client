import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCustomer from '../AboutCustomer/AboutCustomer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <AboutCustomer></AboutCustomer>
            <Footer></Footer>
        </div>
    );
};

export default Home;