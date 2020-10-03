import {useCallback, useRef, useState} from "react";
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

const useHttp = () => {
    const source = axios.CancelToken.source();
    const isMounted = useRef(true);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const request = useCallback(async (callback = () => {}) => {
        setLoading(true);
        setResponse(null);

        try {
            const {data} = await axios.get(API_URL, {
                cancelToken: source.token
            });

            if (isMounted.current) {
                setResponse(data);
                callback();
            }
        } catch (e) {
            if (isMounted.current) {
                setError(e);
            }
        } finally {
            if (isMounted.current) {
                setLoading(false);
            }
        }

        return () => {
            isMounted.current = false;
            source.cancel("abort");
        };
    }, []);

    return {
        error,
        loading,
        response,
        request
    };
};

export default useHttp;