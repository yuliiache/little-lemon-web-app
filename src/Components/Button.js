import React from "react";

const Button = ({ className, children, active, ...attributes }) => {
    return (
        <button
            className={`button ${className} ${active ? 'active' : ''}`}
            type='button'
            {...attributes}>
                {children}
        </button>
    );
};

export default Button;