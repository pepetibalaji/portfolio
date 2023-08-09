import React from "react";
import { ReactComponent as Sun } from "../../../src/assets/images/Sun.svg"
import { ReactComponent as Moon } from "../../../src/assets/images/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
