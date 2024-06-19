import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './home.css';
import BackgroundVideo from './BackgroundVideo.mp4';

const Home = () => {
    const navigate = useNavigate();

    const handleSchedulePickup = () => {
        navigate('/form');
    };
    return (
        <div className="home">
            <video className="video-background" autoPlay muted loop>
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="left">
                <div className="home-text">Turn Scrap into Cash with <span>EcoRaddi's</span> Pickup service
                </div>
                <div className="secondary-home-text">
                    Paper - Plastics - Metals - Appliances
                </div>
            </div>
            <div className="right">
                <div className="phone-number-box">
                    <div>
                        <h1>Welcome to Eco Raddi!!</h1>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bolder', fontSize: '1.5rem' }}>Mobile</h3>
                    </div>
                    <div className="phone-input">
                        <span class="phone-prefix">+91</span>
                        <input
                            type="text"
                            className="phone-number"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="schedule-button">
                        <Button className="button" variant="success" onClick={handleSchedulePickup}>Schedule Pickup</Button>{' '}
                        <p>Facing Facing Problems?<br /> Call us at <a href="tel:+919913816941">+919913816941</a></p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;