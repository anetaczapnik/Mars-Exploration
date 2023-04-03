import React from "react";
import Paragraph from "./Paragraph";

const SecondPage = () => (
    <div className="contentSecondWrapper">
        <div className="decorationText">historic destination</div>
        <div className="columnsWrapper">
            <div className="parWrapper">
                <img
                    src="https://konto.chip.pl/uploads/2022/03/mars-planeta.jpg"
                    alt="mars"/>
                <Paragraph title={"Space Exploration Target"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
            </div>
            <div className="parWrapper">
                <img
                    src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/408611/140429-coslog-selfie.jpg"
                    alt="rover"/>
                <Paragraph title={"Meet Spirit and Opportunity"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
            </div>
            <div className="parWrapper">
                <img
                    src="https://pbs.twimg.com/media/FYvxA5qXgAEvS3j.jpg:large"
                    alt="spacecraft"/>
                <Paragraph title={"Cutting-Edge Technology"} text={"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."}/>
            </div>
        </div>
    </div>
)

export default SecondPage;