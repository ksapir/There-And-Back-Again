import React, { useState } from 'react';

import { checkPassword, validateEmail } from '../utils/helpers';

const styles = {
    form: {
        margin: '20px',
    },
    input: {
        display: 'block',
        marginTop: '5px',
        marginBottom: '5px',
        width: '100%',
        borderRadius: '5px',
    },
    center: {
        textAlign: 'center'
    }
}

function LandingPage() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');

            return;

        }
        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${userName}`
            );
            return;
        }
        alert(`Hello ${userName}`);


        setUserName('');
        setPassword('');
        setEmail('');
    };

    return (
        <div className="container" style={styles.center}>
                <h1 >Let's Go on an Adventure!</h1>
            <div className="row">
                <div className="col s12 m5
                 m5
                 border">
                    <form>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="email"
                        />
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="username"
                        />
                        <input
                            value={password}
                            name="password"
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button type="button" onClick={handleFormSubmit}>Submit</button>
                    </form>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <div className="col s12 m5
                 m5
                 border">
                    <form >
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <button type="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LandingPage