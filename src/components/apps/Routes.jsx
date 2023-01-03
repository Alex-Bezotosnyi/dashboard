import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="*" element={<Dashboard/>} />
        </Routes>
    )
}