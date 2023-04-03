import React, { useState } from "react";
import Paragraph from "./Paragraph";
import Form from "./Form";

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="contentMainWrapper">
            <div className="contentMainWrapper-left">
                <div>
                    <h1 className="title">Discover the Galaxy</h1>
                    <h2 className="subtitle">From Earth to Mars! Step by step<br/>-- until Neptune</h2>
                    <div className="arrow"></div>
                </div>
                <div className="decoration"></div>
                <div className="cta">
                    <p className="cta-text" onClick={toggleForm}>Start My Journey Today</p>
                    {isOpen && <Form handleClose={toggleForm} />}
                </div>
            </div>
            <div className="contentMainWrapper-right">
                <div className="parWrapper1">
                    <Paragraph title={"Why go to Mars?"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
                </div>
                <div className="parWrapper1">
                    <Paragraph title={"Explore Red Planet"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
                </div>
                <div className="parWrapper1 parWrapper2">
                    <Paragraph title={"Our Space Shuttle"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
                    <div className="par3background"></div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
