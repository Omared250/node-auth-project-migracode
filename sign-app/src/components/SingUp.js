import React, { useState } from "react";
import { Link } from "react-router-dom";
import { onSignUp } from "../request/users";

const SingUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');

    const body = {
        name : name,
        email : email,
        password : password
    }

    async function onSignUpClicked() {
        const data = await onSignUp(body);
        setData(JSON.stringify(data))
    }

    return (
        <div className='sing'>
            <h2>Sing Up</h2> 
            <p>Welcome! Please create your acount</p>
            <form>
                <div className='inputs'>
                    <label>Name</label>
                    <input 
                    type='text' 
                    placeholder='Enter your name!'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='inputs'>
                    <label>Email</label>
                    <input 
                    type='email' 
                    placeholder='Enter your email!'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='inputs'>
                    <label>Password</label>
                    <input 
                    type='password' 
                    placeholder='Enter your password!'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button onClick={onSignUpClicked}>CREATE ACCOUNT</button>
                <div><Link to='/' className='button'>Home</Link></div>
                <div>{data}</div>
            </form>
        </div>
    );
}

export default SingUp;