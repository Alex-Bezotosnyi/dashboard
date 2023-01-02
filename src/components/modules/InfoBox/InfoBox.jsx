import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import {DarkModeContext} from "../../apps/DarkModeContext";

import StartPointIMG from "../../../assets/startPoint.png";
import EndPointIMG from "../../../assets/endPoint.png";
import DistanceIMG from "../../../assets/distance.png";
import HighestPointIMG from "../../../assets/highestPoint.png";
import CountryIMG from "../../../assets/country.png";
import FullInfoCSS from "./infoBox.module.scss";
import "../../styles/cards.scss";

const InfoBox = () => {
    const {darkMode} = useContext(DarkModeContext);
    const points = useSelector((state) => state.pointsReducer.points);
    const country = useSelector((state) => state.countryReducer.country);

    const getTotalDistance = () => {
        let total = 0;
        points.forEach((item) => {
            total += +item.distance
        });
        return total;
    }

    const getStartingPoint = () => {
        return points[0] ? points[0].startPoint : "-";
    }

    const getEndingPoint = () => {
        let endingPoint = "-";
        points.forEach((item) => {
            endingPoint = item.endPoint;
        });
        return endingPoint;
    }

    const getHighestPoint = () => {
        let highestPoint = 0;
        points.forEach((item) => {
            if (highestPoint <= +item.altitude) {
                highestPoint = +item.altitude;
                return highestPoint;
            } else {
                return highestPoint;
            }
        });
        return highestPoint;
    }

    const getCountryInfo = () => {
        return {
            countryName: country.at(-1) ? country.at(-1).onCountry : "",
            countryFlag: country.at(-1) ? country.at(-1).flag : "",
            countryCapital: country.at(-1) ? country.at(-1).capital : "",
        };
    };

    return (
        <div className={darkMode ? `${FullInfoCSS.dark}` : `${FullInfoCSS.wrapper}`}>
            <div className={darkMode ? "badge badge-light" : "badge badge-dark"}>
                <img src={CountryIMG} alt="Info"/>
                Total Information
            </div>
            <div className={darkMode ? `${FullInfoCSS.dark}` : `${FullInfoCSS.wrapper__country}`}>
                <div className={darkMode ? "card card-light" : "card card-dark"}>
                    {getCountryInfo().countryFlag
                        ? <img src={getCountryInfo().countryFlag} alt="Country"/>
                    : ""}
                    <div>
                        <span>Capital: {getCountryInfo().countryCapital}</span>
                        <div>Country: {getCountryInfo().countryName}</div>
                    </div>
                </div>
            </div>
            <div className={FullInfoCSS.wrapper__container}>
                <div className={darkMode ? "card card-light" : "card card-dark"}>
                    <img src={StartPointIMG} alt="Start Point"/>
                    <div>
                        <span>Starting Point:</span>
                        <div>{`${getStartingPoint()}`}</div>
                    </div>
                </div>
                <div className={darkMode ? "card card-light" : "card card-dark"}>
                    <img src={EndPointIMG} alt="End Point"/>
                    <div>
                        <span>Ending Point</span>
                        <div>{`${getEndingPoint()}`}</div>
                    </div>
                </div>
                <div className={darkMode ? "card card-light" : "card card-dark"}>
                    <img src={DistanceIMG} alt="Distance"/>
                    <div>
                        <span>Total Distance</span>
                        <div>{`${getTotalDistance()}`}</div>
                    </div>
                </div>
                <div className={darkMode ? "card card-light" : "card card-dark"}>
                    <img src={HighestPointIMG} alt="Highest Point"/>
                    <div>
                        <span>Highest Point</span>
                        <div>{`${getHighestPoint()}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;