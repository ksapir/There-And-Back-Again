import React, { useState } from 'react';
// import mileInput from '../components/logMiles/MileInput';

import { checkPassword, validateEmail } from '../utils/helpers';

function LandingPage() {
    const styles = {
        space: {
            paddingBottom: '30px'
        }
    }
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
        // const [user, setUser] = useState('')
        
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

        // const[user, setUser] = useState('')

        // useEffect(() => {
        //   fetch('http://localhost:3000/api/trails')
        //   .then(res => {
        //     return res.json()
        //   })
        //   .then(data => {
        //     setTrails(data)
        //   })
        // }, [])
    };

    return (
        <div className="container center section">
     
                <h2 >Let's Go on an Adventure!</h2>

            <div className="row">
                <div className="col-sm-12 col-md-5 col-md-5 border">
                    <form >
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
                <div className="col-sm-12 col-md-5 col-md-5 border">
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
            <div className="row">
             <img style={styles.space} src="https://i.kym-cdn.com/entries/icons/original/000/000/143/493654d6ef.jpg" alt="Boromir Meme"/>
            </div>
        </div>

    )
}

export default LandingPage