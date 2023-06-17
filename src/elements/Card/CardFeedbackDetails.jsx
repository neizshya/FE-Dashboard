import React from "react";
import Icon1Anonymous from "../../assets/icons/feedback_anonymous_img.svg";
import Icon2Delete from "../../assets/icons/delete_feedback_gray.svg";
import ButtonComponent from "../Buttons/ButtonComponent";

const CardFeedbackDetails = ({
  //   img,
  //   judul,
  className1,
  className2,
  className3,
  className4,
  className5,
  className6,
  //   date,
  //   subJudul,
  feedback,
}) => {
  return (
    <>
      {feedback && (
        <div className="container">
          <div className={className1}>
            <img src={Icon1Anonymous} />
            <div className={className2}>
              <div>
                <p className={className3}>{feedback.title}</p>
                <p className={className4}>{feedback.date}</p>
              </div>
            </div>
          </div>
          <div className={className5}>
            <p className={className6}>{feedback.subtitle}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardFeedbackDetails;
