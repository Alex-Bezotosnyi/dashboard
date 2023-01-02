import React, {useState, memo, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPoint} from "../../../store/slice";
import {DarkModeContext} from "../../apps/DarkModeContext";
import {v4 as uuidV4} from "uuid";

import "../../styles/buttons.scss";
import HomeCSS from "./inputBox.module.scss";
import AddLightIMG from "../../../assets/add-light.png";
import AddDarkIMG from "../../../assets/add-dark.png";
import InputIMG from "../../../assets/input.png";

const InputBox = memo(() => {
    const {darkMode} = useContext(DarkModeContext)

    const points = useSelector((state) => state.points);

    const dispatch = useDispatch();

    const [startPoint, setStartPoint] = useState("");
    const [endPoint, setEndPoint] = useState("");
    const [distance, setDistance] = useState("");
    const [altitude, setAltitude] = useState("");

    const onAddPoint = (event) => {
        event.preventDefault();

        dispatch(addPoint({
            id: uuidV4(),
            startPoint,
            endPoint,
            distance,
            altitude
        }));

        setStartPoint(endPoint);
        setEndPoint("");
        setDistance("");
        setAltitude("");
    }

    return (
        <div className={darkMode ? `${HomeCSS.dark}` : `${HomeCSS.wrapper}`}>
            <div className={darkMode ? "badge badge-dark" : "badge badge-light"}>
                <img src={InputIMG} alt="InputBox"/>
                Fill the Information
            </div>
            <div className={HomeCSS.wrapper__container}>
                <form>
                    <div className={HomeCSS.wrapper__container__box}>
                        <div>
                            <input type="text"
                                   id={startPoint}
                                   placeholder="Start Point"
                                   value={startPoint}
                                   onChange={(event) => setStartPoint(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text"
                                   placeholder="End Point"
                                   value={endPoint}
                                   onChange={(event) => setEndPoint(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="number"
                                   placeholder="Distance"
                                   value={distance}
                                   onChange={(event) => setDistance(event.target.value)}
                            />
                        </div>
                        <div>
                            <input type="number"
                                   placeholder="Altitude"
                                   value={altitude}
                                   onChange={(event) => setAltitude(event.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button className={darkMode ? "btn btn-white" : "btn btn-success"}
                                type="submit"
                                onClick={onAddPoint}>
                            <img src={darkMode ? AddDarkIMG : AddLightIMG} alt="Add Point"/>
                            Add Point
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default InputBox;