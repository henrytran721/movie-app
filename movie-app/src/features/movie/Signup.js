import React, { useEffect, useReducer, useState } from 'react';
import '../../sass/_signup.scss';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleInput = (setFunction, e) => {
        return setFunction(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup', 
        {
            username,
            password,
            firstName,
            lastName,
            email
        })
        .then((res) => console.log(res));
    }

    return (
        <div>
            <h1>Trackflix</h1>
            <p>Track what movies you are watching and plan to watch</p>
            <form className='signupForm'>
                <input 
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => handleInput(setFirstName, e)}
                />
                <input 
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => handleInput(setLastName, e)}
                />
                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => handleInput(setEmail, e)}
                />
                <input 
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => handleInput(setUsername, e)}
                />
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => handleInput(setPassword, e)}
                />
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;