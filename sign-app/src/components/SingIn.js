import React, { useState } from "react";
import { onSingIn } from "../request/users";
import { Link } from "react-router-dom";

const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');

    const body = {
        email : email,
        password : password
    }

    async function onSignInClicked() {
        const data = await onSingIn(body);
        console.log(data);
        setData(JSON.stringify(data))
    }

    return (
        <div className='sing'>
            <h2>Sing In</h2> 
            <p>Welcome Back! Please login to your acount</p>
            <form>
                <div className='inputs'>
                    <label htmlFor='email'>Email</label>
                    <input 
                    type='email' 
                    placeholder='Enter your email!' 
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='inputs'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    placeholder='Enter your password!' 
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='check'>
                    <input type='checkbox' htmlFor='rememberMe'></input>
                    <label id='rememberMe'>Remember me!</label>
                </div>
                <button onClick={onSignInClicked}>SING IN</button>
                <div><Link to='/' className='button'>Home</Link></div>
                <div>{data}</div>
            </form>
        </div>
    );
}

export default SingIn;