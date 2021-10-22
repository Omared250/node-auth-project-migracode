import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

const Home = () => {
    return (
        <div className='home-page'>
            <h1>A space for everyone!</h1>
            <p>Millions of help for your web development. You don't need to have experience!</p>         
            <BrowserRouter>   
            <ul className='links'>
                <li><Link to='/SingIn' className='button'>Sing In!</Link></li>
                <li><Link to='/SingUp' className='button'>Sing Up!</Link></li>
            </ul>
            <Route path="/SingIn">
                <SingIn/>
            </Route>
            <Route path="/SingUp">
                <SingUp/>
            </Route>
            </BrowserRouter>
        </div>
    );
}

export default Home;