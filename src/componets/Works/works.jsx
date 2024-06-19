import React, { useState, useEffect } from "react";
import './works.css';
import workData from './workData.json'; // Import JSON file

function Works() {
    const [worksData, setWorksData] = useState([]);

    // Fetch data from JSON file
    useEffect(() => {
        setWorksData(workData); // Set data directly from imported JSON
    }, []);

    return (
        <>
            <div className="works-home-new">
                <h1>How It Works?</h1>
                {worksData.length === 0 ? <div>Loading...</div> : (
                    <div className="rows">
                        {worksData.map(item => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="how_works_col">
                                    <h4>{item.title}</h4>
                                    <img src={item.imageSrc} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Works;
