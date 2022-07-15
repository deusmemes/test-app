import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Login, Main} from "./components/pages";
import {Paths} from "./routes/Paths";
import NotFound from "./components/pages/NotFound";
import ToDoDetail from "./components/pages/ToDoDetail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={Paths.Login} element={<Login />} />
                <Route path={Paths.Main} element={<Main />} />
                <Route path={`${Paths.Main}/:id`} element={<ToDoDetail />} />
                <Route path={'*'} element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;
