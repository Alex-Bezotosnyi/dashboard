import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {DarkModeContext} from "../../apps/DarkModeContext";
import "../../styles/badges.scss";
import "../../styles/colors.scss";
import ChartCSS from "./chartBox.module.scss";
import GraphIMG from "../../../assets/graph.png";

export default function ChartBox() {
    const {darkMode} = useContext(DarkModeContext);
    const points = useSelector((state) => state.pointsReducer.points);

    const data = points.map((item) => {
        return {
            name: item.endPoint,
            altitude: item.altitude,
        };
    });

    return (
        <div className={darkMode ? `${ChartCSS.dark}` : `${ChartCSS.wrapper}`}>
            <div className={darkMode ? "badge badge-dark" : "badge badge-light"}>
                <img src={GraphIMG} alt="Graph"/>
                Altitude Graph
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis style={{
                        fontFamily: "Poppins",
                        fontSize: "0.8rem",
                    }}
                           dataKey="name"
                           padding={{left: 0, right: 0}}/>
                    <YAxis style={{
                        fontFamily: "Poppins",
                        fontSize: "0.8rem",
                    }}/>
                    <Tooltip
                        contentStyle={{
                            fontFamily: "Poppins",
                            color: "$fontDark",
                            fontSize: "0.8rem",
                            borderStyle: "1",
                            paddingBlock: "2"
                        }}
                        itemStyle={{
                            fontFamily: "Poppins",
                            color: "$fontDark",
                            fontSize: "0.8rem"
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="altitude"
                        stroke="#004195"
                        strokeWidth="1.5"
                        activeDot={{r: 8}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}