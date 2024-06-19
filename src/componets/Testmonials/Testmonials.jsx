import React from "react";
import './Testmonials.css';
import TestmonialsData from './TestmonialsData.json';

function Testmonials() {
    return (
        <>
            <h1>Testmonials</h1>
            <div className="testmonial">
                {TestmonialsData.map(item => (
                    <div key={item.id} className="testmonial-items">
                        <div className="testmonial-header">
                            <img src={item.image} alt={`photo-of-${item.name}`} />
                            <p>{item.person_name}</p>
                        </div>                
                    <div className="testmonial-body">                  
                      <p>{item.testimonial}</p>                   
                    </div>
                </div> 
                ))}
            </div>                
        </>
    );
}

export default Testmonials;