import React from "react";

const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;