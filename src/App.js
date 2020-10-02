import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import {useGlobalContext} from "./context";

const App = () => {
    const {jokes, setJokes} = useGlobalContext();

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