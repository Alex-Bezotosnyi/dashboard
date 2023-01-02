import React, {useContext} from 'react';
import {DarkModeContext} from "../../apps/DarkModeContext";

import SwitchCSS from "./switch.module.scss"

function Switch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div>
            <label className={SwitchCSS.toggle_switch}>
                <input type="checkbox"
                       onClick={handleClick}
                />
                <span className={SwitchCSS.switch}></span>
            </label>
        </div>
    )
}

export default Switch;