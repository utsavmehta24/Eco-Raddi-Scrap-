import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './price.css'

function Price() {
    const [key, setKey] = useState(0);
    const [loopCount, setLoopCount] = useState(0);

    const resetAnimation = () => {
        if (loopCount < 5) {
            setTimeout(() => {
                setKey(prevKey => prevKey + 1);
                setLoopCount(prevCount => prevCount + 1);
            }, 2000); // 2 seconds delay
        }
    };

    return (
        <>
            <div className="price-component">
                <h1>Best Price</h1>
                <h2 className="item-price"><img src="https://icon-library.com/images/paper-icon-png/paper-icon-png-27.jpg" alt="paper fa icon" />Paper: ₹<VisibilitySensor><CountUp key={key} end={20} duration={5} onEnd={resetAnimation} /></VisibilitySensor> / kg</h2>
                <h2 className="item-price"><img src="https://th.bing.com/th/id/OIP.6g6tXS0XUS5lr6OQ-a-RvgAAAA?rs=1&pid=ImgDetMain" alt="plastic fa icon" />Plastic: ₹<VisibilitySensor><CountUp key={key} end={15} duration={5} onEnd={resetAnimation} /></VisibilitySensor> / kg</h2>
                <h2 className="item-price"><img src="https://cdn1.iconfinder.com/data/icons/elasto-metal-structures-and-products/26/16_i-beam-512.png" alt="metal fa icon" />Metal: ₹<VisibilitySensor><CountUp key={key} end={50} duration={5} onEnd={resetAnimation} /></VisibilitySensor> / kg</h2>
                <h2 className="item-price"><img src="https://th.bing.com/th/id/OIP.Mk90vqFBxX1xq1dvjyWKrwHaHa?pid=ImgDet&w=474&h=474&rs=1" alt="electronics items fa icon" />Electronics: As per condition</h2>
            </div>
        </>
    );
};

export default Price;
