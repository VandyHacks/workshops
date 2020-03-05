import React from "react";
import "./App.css";
import Box from "./components/box";
import Hackpack from "./components/hackpack";
const hpinfo = require("./hackpack.json");
const info = require("./info.json");

const App = () => {
    return (
        <div className='App'>
            <div className='logoBox'>
                <img className='logo' src='./darklogo.svg' alt='vh logo' />
            </div>
            <div className='headerBox'>
                <img className='header' src='./workshops.svg' alt='workshops' />
            </div>
            {info.map(e => (
                <div key={e[0].id} className='boxbox'>
                    <Box {...e[0]}></Box>
                    <Box {...e[1]}></Box>
                </div>
            ))}
            <div className='headerBox'>
                <img className='header' src='./hackpacks.svg' alt='hackpacks' />
            </div>
            {hpinfo.map(e => (
                <div key={e[0].topic} className='boxbox'>
                    <Hackpack {...e[0]}></Hackpack>
                    <Hackpack {...e[1]}></Hackpack>
                </div>
            ))}
            <div className='buttonBox'>
                <a type='button' className='backbut' href='https://vandyhacks.org/'>
                    VandyHacks VII
                </a>
            </div>
        </div>
    );
}

export default App;
