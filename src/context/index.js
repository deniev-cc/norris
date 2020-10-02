import React, {createContext, useContext, useEffect, useState} from "react";
import {getStorage, setStorage} from "../utils";

const Context = createContext({});

const STORAGE_NAME = process.env.REACT_APP_STORAGE_NAME;

const Provider = ({children}) => {
    const [jokes, setJokes] = useState(() => {
        return getStorage(STORAGE_NAME, []);
    });
    const [count, setCount] = useState(0);

    const isset = (id) => {
        return jokes.find(item => item.id === id);
    };

    useEffect(() => {
       setStorage(STORAGE_NAME, jokes);
       setCount(jokes.length);
    }, [jokes]);

    return (
        <Context.Provider value={{
            count,
            jokes,
            setJokes,
            isset
        }}>
            {children}
        </Context.Provider>
    );
};

export const useGlobalContext = () => useContext(Context);

export default Provider;