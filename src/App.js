import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

const App = () => {
    return (
        <BrowserRouter>
            <Layout
                menu={Menu}
                content={Routes}
            />
        </BrowserRouter>
    )
};

export default App;