import React from "react";
import "./App.css";
import Box from "./components/box";
let info = require("./info.json");
function App() {
    return (
        <div className='App'>
            <div className='logoBox'>
                <img className='logo' src='./bigLogo.svg' alt='vh logo' />
            </div>
            {info.map(e => (
                <div key={e[0].id} className='boxbox'>
                    <Box {...e[0]}></Box>
                    <Box {...e[1]}></Box>
                </div>
            ))}
        </div>
    );
}

export default App;
