import React from "react";

const SingUp = () => {
    return (
        <div className='sing'>
            <h2>Sing Up</h2> 
            <p>Welcom! Please create your acount</p>
            <form>
                <div className='inputs'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name!'></input>
                </div>
                <div className='inputs'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your email!'></input>
                </div>
                <div className='inputs'>
                    <label>Password</label>
                    <input type='text' placeholder='Enter your password!'></input>
                </div>
                <button type='submit'>CREATE ACCOUNT</button>
            </form>
        </div>
    );
}

export default SingUp;