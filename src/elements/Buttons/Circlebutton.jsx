import React from "react";
import "./Circlebutton.css"


const Circlebutton = ({
  type,
  className,
  id,
  onClick,
  imgClassName,
  imgUrl,
}) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={className ? `btn ${className}` : "btn"}
        id={id}
        onClick={onClick}
      >
          <img
            src={imgUrl}
            className={`img-button ${imgClassName}`}
            alt="iconStart"
          />
      </button>
    </div>
  );
};

export default Circlebutton;
