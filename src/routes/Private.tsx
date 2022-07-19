import {Route, Routes, Navigate} from "react-router-dom";
import {Paths} from "./Paths";
import ToDoDetail from "../components/pages/ToDoDetail";
import NotFound from "../components/pages/NotFound";
import React from "react";
import {Main} from "../components/pages";

const Private = () => {
    return (
        <Routes>
            <Route path={Paths.Main} element={<Main />} />
            <Route path={`${Paths.Main}/:id`} element={<ToDoDetail />} />
            <Route path={Paths.Login} element={<Navigate to={Paths.Main} replace />} />
            <Route path={'*'} element={<NotFound />}/>
        </Routes>
    )
}

export default Private
