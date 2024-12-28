import React, { useState } from 'react';
/*import './FullNameForm.css';*/

const FullNameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
            setIsSubmitted(true);
        }
    };

    return (
        <div className="container">
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit} className="full-name-form">
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {isSubmitted && (
                <div className="result">
                    <p>Full Name: {fullName}</p>
                </div>
            )}
        </div>
    );
};

export default FullNameForm;
