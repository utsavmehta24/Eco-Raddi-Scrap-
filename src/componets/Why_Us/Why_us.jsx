import React from "react";
import './whyus.css';
import whyUsData from './whyusData.json'; // Import JSON file

function WhyUs() {
    return (
        <div className="whyus">
            <h1>Why Us?</h1>
            <div className="rows1">
                {whyUsData.map(item => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-xl-3">
                        <div className="why_us_col">
                            <img src={item.imageSrc} alt={item.title} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyUs;
