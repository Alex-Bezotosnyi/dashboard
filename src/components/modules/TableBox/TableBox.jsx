import React, {useCallback, useContext, memo} from "react";
import {DarkModeContext} from "../../apps/DarkModeContext";
import {editPoint, removePoint} from "../../../store/slice";
import {useDispatch, useSelector} from "react-redux";

import TableIMG from "../../../assets/table.png";
import "../../styles/buttons.scss";
import PointItemCSS from "./tableBox.module.scss";

export const TableBox = memo(() => {

    const {darkMode} = useContext(DarkModeContext);

    const dispatch = useDispatch();
    const points = useSelector((state) => state.pointsReducer.points);

    const onRemove = useCallback((pointId) => {
            dispatch(removePoint({id: pointId}))
        }, [dispatch]
    )

    const onEdit = useCallback((pointId) => {
            dispatch(editPoint({id: pointId}))
        }, [dispatch]
    )

    return (
        <div className={darkMode ? `${PointItemCSS.dark}` : `${PointItemCSS.wrapper}`}>
            <div className={darkMode ? "badge badge-dark" : "badge badge-light"}>
                <img src={TableIMG} alt="Table"/>
                Trip Information
            </div>
            <div className={PointItemCSS.wrapper__table}>
                <table>
                    <tbody>
                    <tr>
                        <th>Start Point</th>
                        <th>End Point</th>
                        <th>Distance</th>
                        <th>Altitude</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {points.map((point) => (
                        <tr>
                            <td>{point.startPoint}</td>
                            <td>{point.endPoint}</td>
                            <td>{point.distance}</td>
                            <td>{point.altitude}</td>
                            <td>
                                <button className="btn btn-error"
                                        onClick={() => onRemove(point.id)}>
                                    -
                                </button>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
});