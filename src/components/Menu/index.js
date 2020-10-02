import React from "react";
import Link from "../Link";
import {useGlobalContext} from "../../context";

const Menu = () => {
    const {count} = useGlobalContext();

    return (
        <ul className="nav nav-pills mb-4">
            <li className="nav-item">
                <Link href="/" value="Главная" />
            </li>
            <li className="nav-item">
                <Link href="/favorite" value={`Избранное (${count})`} />
            </li>
        </ul>
    );
};

export default Menu;