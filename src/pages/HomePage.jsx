import React from 'react';
import Header from '../components/Header';

import CatImage from '../components/CatImage';
import BreedsSelect from '../features/BreedsSelect';


const HomePage = () => (

    <div className='m-0 p-0 box-border'>
        <Header />
        <BreedsSelect />
        <CatImage />

    </div>
);

export default HomePage;