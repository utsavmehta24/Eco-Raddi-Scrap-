import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imageCards from './card_img.png';
import './form.css';

function form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [Weight, setWeight] = useState('3kg');
    const [MobileNumber, setMobileNumber] = useState('');
    const [anySpecification, setAnySpecification] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedTime, setSelectedTime] = useState(new Date().toISOString().slice(11, 16));
    const [selectedItems, setSelectedItems] = useState([]);

    const navigate = useNavigate();
    const [emailError, setemailError] = useState('');
    const [nameError, setnameError] = useState('');
    const [mobilenumberError, setmobilenumberError] = useState('');
    const [addressError, setaddressError] = useState('');
    const [stateIndiaError, setstateIndiaError] = useState('');
    const [zipError, setzipError] = useState('');
    const [cityError, setcityError] = useState('');



    const handleCheckboxChange = (event) => {
        const { checked, name } = event.target;
        if (checked) {
            setSelectedItems([...selectedItems, name]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== name));
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Regular expression for email validation
        const mobileNumberRegex = /^\d{10}$/; // Regular expression for mobile number validation
        const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression for name validation
        const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/; // Regular expression for address validation
        const stateIndiaRegex = /^[a-zA-Z\s]*$/; // Regular expression for state validation
        const zipRegex = /^\d{6}$/; // Regular expression for zip code validation
        const cityRegex = /^[a-zA-Z\s]*$/; // Regular expression for city validation
        if (!emailRegex.test(email)) {
            setemailError('Please enter a valid email address.');
            console.log(emailError);
            return;
        }
        if (!nameRegex.test(name)) {
            setnameError('Please enter a valid name.');
            console.log(nameError);
            return;
        }
        if (!addressRegex.test(address)) {
            setaddressError('Please enter a valid address.');
            console.log(addressError);
            return;
        }
        if (!mobileNumberRegex.test(MobileNumber)) {
            setmobilenumberError('Please enter a valid 10-digit mobile number.');
            console.log(mobilenumberError);
            return;
        }
        if (!stateIndiaRegex.test(state)) {
            setstateIndiaError('Please enter a valid state.');
            console.log(stateIndiaError);
            return;
        }
        if (!zipRegex.test(zip)) {
            setzipError('Please enter a valid 6-digit zip code.');
            console.log(zipError);
            return;
        }
        if (!cityRegex.test(city)) {
            setcityError('Please enter a valid city.');
            console.log(cityError);
            return;
        }

        const newCustomer = { name, email, address, city, state, zip, Weight, MobileNumber, anySpecification, selectedDate, selectedTime };
        console.log(newCustomer);
        fetch('http://localhost:8000/Details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomer)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Handle successful response here
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors here
            });
        navigate('/done');
    };

    return (
        <div className="form-body">
            <div className="container123">
                <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                    <div className="row123">
                        <div className="col123">
                            <h3 className="title123">billing address</h3>
                            <div className="inputBox">
                                <span>full name :</span>
                                <input
                                    type="text" placeholder="john deo"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <span style={{ color: 'red' }}>{nameError}</span>
                            <div className="inputBox">
                                <span>Mobile No. :</span>
                                <input
                                    type="number" placeholder="+91 9999999999"
                                    value={MobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)} />
                            </div>
                            <span style={{ color: 'red' }}>{mobilenumberError}</span>
                            <div className="inputBox">
                                <span>email :</span>
                                <input
                                    type="email" placeholder="example@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <span style={{ color: 'red' }}>{emailError}</span>
                            <div className="inputBox">
                                <span>address :</span>
                                <input type="text" placeholder="room - street - locality"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <span style={{ color: 'red' }}>{addressError}</span>
                            <div className="inputBox">
                                <span>city :</span>
                                <input type="text" placeholder="mumbai"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <span style={{ color: 'red' }}>{cityError}</span>
                            <div className="flex">
                                <div className="inputBox">
                                    <span>state :</span>
                                    <input type="text" placeholder="Maharashtra"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)} />
                                </div>
                                <span style={{ color: 'red' }}>{stateIndiaError}</span>
                                <div className="inputBox">
                                    <span>zip code :</span>
                                    <input type="text" placeholder="123 456"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)} />
                                </div>
                                <span style={{ color: 'red' }}>{zipError}</span>
                            </div>

                        </div>
                        <div className="col123">

                            <h3 className="title123">Enter Item Details <span style={{ fontSize: '0.8rem' }}>(approx.)</span></h3>
                            <div className="Schedulingdetails">
                                <div className="Items-Selection">
                                    <h6>Items:</h6>
                                    <div className="item-of-waste">
                                        <p><label htmlFor="Paper">Paper</label><input type="checkbox" name="Paper" id="Paper" onChange={handleCheckboxChange} /></p>
                                        <p><label htmlFor="Plastic">Plastic</label><input type="checkbox" name="Plastic" id="Plastic" onChange={handleCheckboxChange} /></p>
                                    </div>
                                    <div className="item-of-waste">
                                        <p><label htmlFor="Metal">Metal</label><input type="checkbox" name="Metal" id="Metal" onChange={handleCheckboxChange} /></p>
                                        <p><label htmlFor="Electronic Appliances">Electronic Appliances</label><input type="checkbox" name="Electronic Appliances" id="Electronic Appliances" onChange={handleCheckboxChange} /></p>
                                    </div>
                                    {selectedItems.length === 0 && <p style={{ color: 'red' }}>Please select at least one item.</p>}
                                    <div className="item-of-waste">
                                        <label htmlFor="Others" style={{ margin: '0.1rem 0.3rem' }}>Others</label><input type="checkbox" name="Others" />
                                    </div>
                                    <input type="text" className="others-input" name="Others" placeholder="Please specify" />
                                </div>
                                <div className="Weight-Selection">
                                    <p>Approx. Weight <span>(in kg)</span></p>
                                    <select name="Weight" value={Weight} onChange={(e) => setWeight(e.target.value)}>
                                        <option value="1kg" >1kg</option>
                                        <option value="2kg">2kg</option>
                                        <option value="3kg">3kg</option>
                                        <option value="4kg">4kg</option>
                                        <option value="more than 4kgs">more than 4kgs</option>
                                    </select>
                                </div>
                                <div className="date-and-time-selection">
                                    <br />
                                    <div className="date-selection">
                                        <p>Date</p>
                                        <input type="date" name="Date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="time-selection">
                                        <p>Time</p>
                                        <input type="time" name="Time"
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)} />
                                    </div>
                                </div>
                                <br />
                                <div className="any-specification-box">
                                    <p>Any Specification</p>
                                    <textarea name="Any Specification" cols="30" rows="6" placeholder="Any Specification then please specify"
                                        value={anySpecification} onChange={(e) => setAnySpecification(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="col123">

                            <h3 className="title">payment method card</h3>

                            <div className="inputBox">
                                <span>cards accepted :</span>
                                <img src={imageCards} alt="" />
                            </div>
                            <div className="inputBox">
                                <span>name on card :</span>
                                <input type="text" placeholder="mr. john deo" />
                            </div>
                            <div className="inputBox">
                                <span>credit card number : / Debit Card number:</span>
                                <input type="number" placeholder="1111-2222-3333-4444" />
                            </div>
                            <div className="inputBox">
                                <span>exp month :</span>
                                <input type="text" placeholder="january" />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>exp year :</span>
                                    <input type="number" placeholder="2022" />
                                </div>
                                <div class="cash-container">
                                    <h1>Pay Cash:
                                        <input type="checkbox" name="Cash" id="Cash" class="stylish-checkbox" /></h1>
                                </div>
                            </div>
                            <h2></h2>
                        </div>
                        <div className="col123" style={{ width: '30%' }}>
                            <div className="flex">
                                <h3 className="title">UPI Transfer</h3>
                                <img className="UPI-img" style={{ width: '100%', height: '70%' }} src="https://imgv3.fotor.com/images/side/support-all-upi-pay-apps_2023-09-01-025325_odwc.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="proceed to checkout" className="submit-btn" />
                </form>
            </div>
        </div>
    );
}

export default form;
