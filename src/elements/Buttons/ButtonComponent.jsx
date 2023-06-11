import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = ({
  type,
  className,
  id,
  onClick,
  imgClassName,
  imgUrlStart,
  imgUrlEnd,
  buttonName,
  dataBsDismiss
}) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={className ? `btn ${className}` : "btn"}
        id={id}
        onClick={onClick}
        data-bs-dismiss={dataBsDismiss}
      >
        {imgUrlStart && (
          <img
            src={imgUrlStart}
            className={`img-button-left ${imgClassName}`}
            alt="iconStart"
          />
        )}
        {buttonName}
        {imgUrlEnd && (
          <img
            src={imgUrlEnd}
            className={`img-button-right ${imgClassName}`}
            alt="iconEnd"
          />
        )}
      </button>
    </div>
  );
};

export default ButtonComponent;


// dapat memakai classname yang sudah dibuat dicss atau membuat sendiri
// gunakan imgurlstart untuk icon sebelum text dan imgurlend untuk icon sesudah text atau bisa gunakan keduanya dapat menambahkan classname jg

{/* <ButtonComponent
type={"button"}
className={"btn-sport"}
buttonName={"Text"}
imgUrlStart={iconsport}
imgUrlEnd={expandicon}
imgClassName={"btn-sport-icon"}
/>
<ButtonComponent
type={"button"}
className={"btn-google"}
buttonName={"Button"}
imgUrlStart={googleicon}
imgClassName={"btn-google-icon"}
/>
<ButtonComponent
type={"button"}
className={"btn-sidebar"}
buttonName={"Membership"}
imgUrlStart={explore}
imgClassName={"btn-sidebar-icon"}
/> */}

// contoh cara pemanggilan button component 