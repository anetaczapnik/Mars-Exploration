import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const App = () =>{
    return(
          <p>dd</p>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
