import React, {memo, useContext} from 'react';
import {DarkModeContext} from "./DarkModeContext";
import {Navbar} from "../modules/Navbar/Navbar";
import {RoutesApp} from "./Routes";

import "../../components/styles/main.scss";

export const Layout = memo(() => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? "dark" : "container"}>
            <header>
                <Navbar/>
            </header>
            <main className="main">
                <RoutesApp/>
            </main>
            <footer>
                <h2>ALTITUDE CHART</h2>
            </footer>
        </div>
    );
});