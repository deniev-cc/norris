import {useCallback, useState} from "react";
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const request = useCallback(async (callback = () => {}) => {
        setLoading(true);
        setResponse(null);

        try {
            const {data} = await axios.get(API_URL);
            setResponse(data);
            callback()
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        error,
        loading,
        response,
        request
    };
};

export default useHttp;