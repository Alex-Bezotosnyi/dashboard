import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCountry} from "../../../store/CountrySlice";
import {DarkModeContext} from "../../apps/DarkModeContext";
import axios from "axios";
import CountryBoxCSS from "./SelectBox.module.scss";
import SelectCountryIMG from "../../../assets/select-country.png"

const SelectBox = (props) => {
    const {darkMode} = useContext(DarkModeContext);

    const [countries, setCountries] = useState([]);
    const [onCountry, setOnCountry] = useState("");
    const [flag, setFlag] = useState("");
    const [capital, setCapital] = useState("");

    const fetchURL = "https://restcountries.com/v3.1/all";
    const fetchURLInfo = `https://restcountries.com/v3.1/name/${onCountry}`;

    const country = useSelector((state) => state.countryReducer.country);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(fetchURL);
            const data = response.data.map((item) => {
                return {
                    countryName: item.name.common,
                }
            });
            setCountries(data);
        };

        function handleError(fn) {
            return function () {
                return fn().catch(function (err) {
                    console.log("Error in getCountries", err);
                });
            };
        }

        const getCountriesWithError = handleError(getCountries);
        getCountriesWithError();
    }, []);

    const onSelect = (event) => {
        event.preventDefault();

        const getInfo = async () => {
            const response = await axios.get(fetchURLInfo);
            const data = response.data.map((item) => {
                return {
                    countryFlag: item.flags.png,
                    countryCapital: item.capital,
                };
            });
            setFlag(data);

            dispatch(selectCountry({
                onCountry,
                flag: data[0].countryFlag,
                capital: data[0].countryCapital,
            }));

            setOnCountry("");
            setFlag("");
            setCapital("");
        };
        getInfo();
    };

    return (
        <div className={darkMode ? CountryBoxCSS.dark : CountryBoxCSS.light}>
            <div className={darkMode ? "badge badge-dark" : "badge badge-light"}>
                <img src={SelectCountryIMG} alt="Country"/>
                Select the Country
            </div>
            <div>
                <form>
                    <div>
                        <select value={onCountry} onChange={(event) => setOnCountry(event.target.value)}>
                            <option value="" disabled>Select the country</option>
                            {
                                countries.map((item, key) =>
                                    <option value={item.countryName} key={key}>
                                        {item.countryName}
                                    </option>
                                )
                            };
                        </select>
                    </div>
                    <div>
                        <button className={darkMode ? "btn btn-white" : "btn btn-success"}
                                type="submit"
                                onClick={onSelect}>Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SelectBox;