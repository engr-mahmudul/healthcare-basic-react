import React from 'react';
import Banner from '../Banner/Banner';
import Famous from '../Famous/Famous';
import Services from '../Services/Services';
import SpecilService from '../SpecialService/SpecilService';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpecilService></SpecilService>
            <Famous></Famous>
        </div>
    );
};

export default Homepage;