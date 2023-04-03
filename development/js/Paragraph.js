import React from "react";

const Paragraph = ( props ) => (
    <div className="paragraph">
        <p className="paragraph--title">{props.title}</p>
        <p className="paragraph--title_text">{props.text}</p>
    </div>
)

export default Paragraph;