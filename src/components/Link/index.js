import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const Link = ({ href, value }) => {
    return (
        <NavLink
            className="nav-link"
            exact
            to={href}
        >
            {value}
        </NavLink>
    )
};

Link.propTypes = {
    href: PropTypes.string,
    value: PropTypes.string,
};

export default Link;