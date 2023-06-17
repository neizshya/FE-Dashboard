import React from "react";

const ListMenuFeedbackCard = ({img, judul, className1, className2, className3, className4, className5, onClick, date, subJudul}) => {
  return (
    <div className={className1} onClick={onClick}>
      <img src={img} />
      <div className={className2}>
        <div className={className3}>
        <p className={className4}>{judul}</p>
        <p className={className5}>{date}</p>
        </div>
        <p className={className5}>{subJudul}</p>
      </div>
    </div>
  );
};

export default ListMenuFeedbackCard;
