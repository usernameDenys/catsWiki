import React from 'react';
import Header from '../components/Header';

import CatImage from '../components/CatImage';
import BreedsSelect from '../features/BreedsSelect';
import Footer from '../components/Footer';


const HomePage = () => (

    <div className='container mx-auto px-4'>
        <Header />
        <BreedsSelect />
        <Footer />
    </div>
);

export default HomePage;