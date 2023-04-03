import React, {createContext, useState, Component } from "react";
import { createRoot } from "react-dom/client";
import {
    HashRouter,
    Route,
    Routes
} from 'react-router-dom';
import "../scss/main.scss"
import Hero from "./Hero";
import Nav from "./Nav";
import SecondPage from "./SecondPage";
import Footer from "./Footer";
import Contact from "./Contact";

/*export const AppContext = createContext(null);*/

const App = () => {
/*    const [candidates, setCandidates] = useState([
        {
            firstName: "Anna",
            lastName: "Kowalik",
            email: "anna.kowalik@wp.pl",
            motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
        },
        {
            firstName: "Katarzyna",
            lastName: "Piotrowska",
            email: "k.piotrowska@onet.pl",
            motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
        },
        {
            firstName: "Marcin",
            lastName: "Mulicki",
            email: "mm2589@wp.pl",
            motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
        },
        {
            firstName: "Adam",
            lastName: "Wolecki",
            email: "a.woleckik@onet.pl",
            motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
        },
    ]);*/

    return(
/*        <AppContext.Provider value={{candidates, setCandidates}}>*/
            <HashRouter>
                <Routes>
                    <Route path='/' element={
                        <div>
                            <Hero />
                            <SecondPage />
                            <Footer />
                        </div>} />
                    <Route path='/contact' element={
                        <div>
                            <Contact />
                        </div>} />
                </Routes>
            </HashRouter>
/*        </AppContext.Provider>*/
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);