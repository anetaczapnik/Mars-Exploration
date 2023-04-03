import React from "react";
import Hero from "./Hero";
import {HashRouter, Route, Routes} from "react-router-dom";
import SecondPage from "./SecondPage";
import Footer from "./Footer";
import Nav from "./Nav";
import MainPage from "./MainPage";
import Details from "./Details";

const Contact = () => (
    <div className="hero">
        <Nav />
        <Details />
        <Footer />
    </div>
)

export default Contact;