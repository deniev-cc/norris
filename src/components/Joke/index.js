import React, {useEffect, useState} from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import {find, filter} from "lodash";
import {useGlobalContext} from "../../context";

const Joke = ({ item, isFavoriteJoke = false }) => {
    const {
        id,
        icon_url,
        value
    } = item;

    const {jokes, setJokes} = useGlobalContext();
    const [isFavorite, setIsFavorite] = useState(isFavoriteJoke);

    const toggleHandler = () => {
        if (findInStorage()) {
            setJokes(filter(jokes, i => i.id !== id));
        } else {
            let items = [...jokes];
            items.push(item);

            if (items.length > 10) {
                items = items.slice(-10);
            }

            setJokes(items)
        }
    };

    const findInStorage = () => {
        return find(jokes, {id});
    };

    useEffect(() => {
        setIsFavorite(!!findInStorage())
    }, [jokes]);

    return (
        <div className="card mb-3 mt-3">
            <div className="card-body">

                {icon_url && (
                    <img
                        alt=""
                        className="mb-3"
                        src={icon_url}
                    />
                )}

                <p className="card-text">{value}</p>

                {isFavorite ? (
                    <Button
                        disabled={false}
                        type="danger"
                        onClick={toggleHandler}
                        value="Удалить из избранного"
                    />
                ) : (
                    <Button
                        disabled={false}
                        onClick={toggleHandler}
                        value="Добавить в избранное"
                    />
                )}

            </div>
        </div>
    );
};

Joke.defaultProps = {
    isFavoriteJoke: false
};

Joke.propTypes = {
    item: PropTypes.object,
    isFavoriteJoke: PropTypes.bool,
};

export default Joke;