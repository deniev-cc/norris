import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import useHttp from "../../hooks/useHttp";
import Joke from "../../components/Joke";

const Timer = () => {
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const {request, response, loading} = useHttp();

    const handlerClick = () => {
        setStart(prev => !prev);
    };

    const renderButton = () => {
        if (!start) {
            return <Button
                disabled={loading}
                onClick={handlerClick}
                value="Запустить"
            />
        }

        return <Button
            type="danger"
            disabled={loading}
            onClick={handlerClick}
            value={`Остановить (${seconds}) сек`}
        />
    };

    return (
        <>
            {renderButton()}
            {response && <Joke item={response} />}
        </>
    );
};

export default Timer;