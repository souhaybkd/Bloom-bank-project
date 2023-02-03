import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [maladies, setMaladies] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting form', {
            firstName, lastName, email, password, age, maladies, bloodType, location
        });
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Sign Up</h2>
            <div className="form-field">
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="maladies">Maladies:</label>
                <input
                    type="text"
                    id="maladies"
                    value={maladies}
                    onChange={e => setMaladies(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="bloodType">Blood Type:</label>
                <select id="bloodType" value={bloodType} onChange={e => setBloodType(e.target.value)}>
                    <option value="">--Select Blood Type--</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
        </form>
    );
};

export default SignUpForm;

