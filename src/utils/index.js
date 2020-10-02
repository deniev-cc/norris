import {isEmpty} from "lodash";

export const getStorage = (key, initialValue = null) => {
    const items = JSON.parse(localStorage.getItem(key));

    if (!isEmpty(items)) {
        return items.slice(-10);
    }

    return initialValue;
};

export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};