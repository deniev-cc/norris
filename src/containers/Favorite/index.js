import React from "react";
import {isEmpty} from "lodash";
import {useGlobalContext} from "../../context";
import Joke from "../../components/Joke";
import Button from "../../components/Button";

const Favorite = () => {
    const {count, jokes, setJokes} = useGlobalContext();

    if (isEmpty(jokes)) {
        return <p>Данных нет</p>
    }

    const renderJokes = () => {
        return jokes.map((item, i) => {
            return (
                <Joke
                    key={i}
                    item={item}
                    isFavoriteJoke={true}
                />
            )
        })
    };

    const handlerRemoveAll = () => {
        setJokes([]);
    };

    return (
        <>
            <Button
                disabled={jokes.length < 2}
                onClick={handlerRemoveAll}
                type="danger"
                value="Удалить все"
            />

            {renderJokes()}
        </>
    )
};

export default Favorite;