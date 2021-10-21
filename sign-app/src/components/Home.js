import React from "react";
import SingIn from "./SingIn";

const Home = () => {
    return (
        <div className='home-page'>
            <h1>A space for everyone!</h1>
            <p>Millions of help for your web development. You don't need to have experience!</p>
            <div className='buttons'>
                <button>Sing In!</button>
                <button>Sing Up!</button>
            </div>
        </div>
    );
}

export default Home;