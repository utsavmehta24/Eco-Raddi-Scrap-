import React from "react";
import './usage.css';
import householdData from './Household.json';
import businessData from './Bussiness.json';

function Usage() {
    return (
        <>
            <h2 className="deferent_title">Tailored recycling for homes & Businesses <br />addressing all requirements</h2>
            <div className="master-allocation">
                <div className="row2">
                    <div className="left1">
                        <div className="content-holder">
                            <p className="different_sub_title">For Household</p>
                            <ul className="deferent_ul">
                                {householdData.map(item => (
                                    <li key={item.id}>
                                        <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg" alt={item.title} />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <img className="second-image" src="https://ikp.edgekit.net/y8s2vhk66ef/home_illust_1_vqbxsy5za.png?updatedAt=1628667425589" alt="online-cleaning-image" />
                </div>
                <div className="row2">
                    <img className="second-image" src="https://ikp.edgekit.net/y8s2vhk66ef/business_illust1_1_UjVieCFRixz.png?updatedAt=1628667425278" />
                    <div className="left1">
                        <div className="content-holder">
                            <p className="different_sub_title">For Business</p>
                            <ul className="deferent_ul">
                                {businessData.map(item => (
                                    <li key={item.id}>
                                        <img src="https://ik.imagekit.io/99x/startup/99xCheck_S1K62CB8I.svg" alt={item.title} />
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usage;
