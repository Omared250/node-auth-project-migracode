import React from "react";
import SingUp from "./SingUp";

const Home = () => {
    return (
        <div className='home-page'>
            <h1>A space for everyone!</h1>
            <p>Millions of help for your web development. You don't need to have experience!</p>
            <SingUp/>
        </div>
    );
}

export default Home;