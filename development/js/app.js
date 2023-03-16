import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const App = () => (<p>Test TEST TEST!!!</p>)

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);