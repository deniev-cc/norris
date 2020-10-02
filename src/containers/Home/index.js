import React, {useEffect} from "react";
import axios from "axios";
import Button from "../../components/Button";
import useHttp from "../../hooks/useHttp";
import Joke from "../../components/Joke";

const Home = () => {
    const {request, response, loading} = useHttp();

    return (
        <>
            <Button
                disabled={loading}
                onClick={request}
                value="Загрузить шутку"
            />

            {response && <Joke item={response} />}
        </>
    )
};

export default Home;