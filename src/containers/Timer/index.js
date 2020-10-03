import React, {useEffect, useState} from "react";
import Button from "../../components/Button";
import useHttp from "../../hooks/useHttp";
import Joke from "../../components/Joke";

const Timer = () => {
    let timeout;
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const {request, response, loading} = useHttp();

    useEffect(() => {
        if (!start) {
            setSeconds(3);
            return;
        }

        if (seconds) {
            timeout = setTimeout(() => {
                console.log(seconds)
                setSeconds(prev => --prev);
            }, 1000)
        } else {
            request(() => setSeconds(3));
        }

        return () => clearTimeout(timeout);
    }, [start, seconds])

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