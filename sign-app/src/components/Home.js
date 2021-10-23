import React from "react";
import { Link } from "react-router-dom";
// import SingIn from "./SingIn";
// import SingUp from "./SingUp";

const Home = () => {
    return (
        <div className='home-page'>
            <h1>A space for everyone!</h1>
            <p>Millions of help for your web development. You don't need to have experience!</p>          
            <ul className='links'>
                <li><Link to='/SingIn' className='button'>Sing In!</Link></li>
                <li><Link to='/SingUp' className='button'>Sing Up!</Link></li>
            </ul>
        </div>
    );
}

export default Home;