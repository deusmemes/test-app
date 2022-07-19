import React from 'react';
import Private from "./routes/Private";
import Public from "./routes/Public";
import useAuth from "./hooks/useAuth";

function App() {
    const {isAuth, loading} = useAuth()

    if (loading) return <h2>Loading...</h2>

    return (
        <div className="App">
            { isAuth ? <Private /> : <Public /> }
        </div>
    );
}

export default App;
