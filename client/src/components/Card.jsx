import React from "react";

const Card = ({ text, id, name, date, operacion, button }) => {
    return (
        <div className="carta">
            <h3>{name}</h3>
            <h6>Due: {date}</h6>
            <button
                className={
                    text === "progreso" ? "btn btn-warning" : "btn btn-success"
                }
                onClick={(e) => {
                    operacion(text, id);
                }}
            >
                {button}
            </button>
        </div>
    );
};

export default Card;
