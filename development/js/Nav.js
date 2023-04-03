import React, { useState } from "react";
import "../scss/main.scss"
import Form from "./Form";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Tour from "./Tour"

const Nav = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isTourOpen, setIsTourOpen] = useState(false);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    }

    const toggleTour = () => {
        setIsTourOpen(!isTourOpen);
    }

    return (
        <>
            <div className="navWrapping">
                <div className="logo">NASA</div>
                <nav>
                    <ul className="nav">
                        <li><NavLink to={"/"} style={{ textDecoration: 'none' }}> <div className="navLink navLink1">Home</div></NavLink></li>
                        <li><NavLink onClick={toggleTour} style={{ textDecoration: 'none' }}> <div className="navLink">Tour</div></NavLink></li>
                        {isTourOpen && <Tour handleClose={toggleTour} />}
                        <li><NavLink to={"/contact"} style={{ textDecoration: 'none' }}> <div className="navLink">Contact</div></NavLink></li>
                    </ul>
                </nav>
                <div>
                    <button className="journey" onClick={toggleForm}><span>&#10230;</span>Sign up for a Tour</button>
                    {isFormOpen && <Form handleClose={toggleForm} />}
                </div>
            </div>
        </>
    )
}

export default Nav;