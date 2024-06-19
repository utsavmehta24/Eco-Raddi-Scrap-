import React from 'react';
import Home from './componets/Home/Home';
import Works from './componets/Works/works';
import Whyus from './componets/Why_Us/Why_us';
import Usage from './componets/Usage/usage';
import Testmonials from './componets/Testmonials/Testmonials';
import Blogs from './componets/Blogs/Blogs';
import Price from './componets/price/price';
import 'bootstrap/dist/css/bootstrap.min.css';

function Master() {
    return (
        <>
            <Home />
            <Price />
            <Works />
            <Whyus />
            <Usage />
            <Testmonials />
            <Blogs />
        </>
    );
}

export default Master;