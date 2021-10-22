import React from "react";

const SingIn = () => {
    return (
        <div className='sing'>
            <h2>Sing In</h2> 
            <p>Welcome Back! Please login to your acount</p>
            <form>
                <div className='inputs'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter your email!' id='email'></input>
                </div>
                <div className='inputs'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' placeholder='Enter your password!' id='password'></input>
                </div>
                <div className='check'>
                    <input type='checkbox' htmlFor='rememberMe'></input>
                    <label id='rememberMe'>Remember me!</label>
                </div>
                <button type='submit'>SING IN</button>
            </form>
        </div>
    );
}

export default SingIn;