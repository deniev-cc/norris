import React from "react";
import PropTypes from "prop-types";

const Button = ({
    disabled,
    onClick,
    type = "primary",
    value
}) => {
    return (
        <button
            disabled={disabled}
            type="button"
            className={`btn btn-${type}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string
};

export default Button;