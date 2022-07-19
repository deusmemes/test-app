import {Route, Routes, Navigate} from "react-router-dom";
import {Paths} from "./Paths";
import {Login} from "../components/pages";
import React from "react";

const Public = () => {
    return (
        <Routes>
            <Route path={Paths.Login} element={<Login />} />
            <Route path={'*'} element={<Navigate to={Paths.Login} replace />} />
        </Routes>
    )
}

export default Public
