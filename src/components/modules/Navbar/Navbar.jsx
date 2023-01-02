import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {DarkModeContext} from "../../apps/DarkModeContext";
import Switch from "../Switch/Switch";
import NavbarCSS from "./navbar.module.scss";
import LogoLightIMG from "../../../assets/mount-light.png"
import LogoDarkIMG from "../../../assets/mount-dark.png"

export const Navbar = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <nav className={darkMode ? `${NavbarCSS.dark}` : `${NavbarCSS.wrapper}`}>
            <ul className={NavbarCSS.logo}>
                <img src={darkMode ? LogoLightIMG : LogoDarkIMG} alt="Mount"/>
            </ul>
            <ul>
                <NavLink to="/"
                         className={({isActive}) =>
                             (isActive ? NavbarCSS.wrapper__active : NavbarCSS.wrapper__inactive)}>
                    Mount
                </NavLink>
                {/*<NavLink to="/chart"*/}
                {/*         className={({isActive}) =>*/}
                {/*             (isActive ? NavbarCSS.wrapper__active : NavbarCSS.wrapper__inactive)}>*/}
                {/*    ChartBox*/}
                {/*</NavLink>*/}
            </ul>
            <ul>
                <Switch/>
            </ul>
        </nav>
    );
};