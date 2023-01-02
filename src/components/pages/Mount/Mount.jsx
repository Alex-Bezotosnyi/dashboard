import React, {useContext} from 'react';
import {DarkModeContext} from "../../apps/DarkModeContext";
import ChartApp from "../../modules/ChartBox/ChartBox";
import SelectBox from "../../modules/SelectBox/SelectBox";
import InfoBox from "../../modules/InfoBox/InfoBox";
import {TableBox} from "../../modules/TableBox/TableBox";
import InputBox from "../../modules/InputBox/InputBox";

import MainCSS from "./mount.module.scss";

const Mount = () => {

    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `${MainCSS.dark}` : `${MainCSS.wrapper}`}>
            <div className={MainCSS.sidebar}>
                <InputBox/>
            </div>
            <div className={MainCSS.country_box}>
                <SelectBox/>
            </div>
            <div className={MainCSS.main_info}>
                <InfoBox/>
            </div>
            <div className={MainCSS.main}>
                <TableBox/>
            </div>
            <div className={MainCSS.graph}>
                <ChartApp/>
            </div>
        </div>
    );
};

export default Mount;