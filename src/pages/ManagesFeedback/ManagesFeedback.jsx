import React, { useState } from "react";
import "./ManagesFeedback.css";
import "./FeedbackDetail.css";
import Cover from "../../elements/Card/Cover";
import imgCover from "../../assets/icons/Appreciation 1.svg";
import ButtonComponent from "../../elements/Buttons/ButtonComponent";
import Icon1Expandmore from "../../assets/icons/expand_more.svg";
import Icon2Expandless from "../../assets/icons/expand_less.svg";
import Icon3Anonymous from "../../assets/icons/feedback_anonymous_img.svg";
import Icon4Deletecard from "../../assets/icons/delete_feedback_gray.svg";
import Icon5back from "../../assets/icons/close-cancel.svg";
import ListMenuFeedbackCard from "../../elements/Card/ListMenuFeedbackCard";
import CardFeedbackDetails from "../../elements/Card/CardFeedbackDetails";
// import Tabsfeedbackcomp from "../../components/Tabsfeedback/Tabsfeedbackcomp";

const ManagesFeedback = () => {
  const [openbuttonweek, setopenbuttonweek] = useState(false);
  const [openfeedback, setopenfeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState("This Week");

  const handleOpenbtn = () => {
    setopenbuttonweek(!openbuttonweek);
  };
  const handleMenuSelection = (option) => {
    setSelectedOption(option);
    setopenbuttonweek(false);
  };
  const handleclosefeedback = () => {
    setopenfeedback(false);
  };

  const handleDeleteFeedback = (id) => {
    setfeedback((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback.id !== id))
  }
  //   const handleOpenfeedback = () => {
  //     setopenfeedback(!openfeedback);
  //   };

  const [feedbacks, setfeedback] = useState([
    {
      title: "Emmer",
      date: "12:31 Pm, 20 May, 2023",
      subtitle: "Grass-roots background synergy",
      id: 1,
    },
    {
      title: "Hilhj",
      date: "12:31 Pm, 20 March, 2023",
      subtitle: "Devolved eco-centric hardware",
      id: 2,
    },
    {
      title: "Renner",
      date: "12:31 Pm, 20 Jan, 2023",
      subtitle: "Organic secondary moderator",
      id: 3,
    },
    {
      title: "Ziemann ",
      date: "12:31 Pm, 20 July, 2022",
      subtitle: "Customer-focused modular archive",
      id: 4,
    },
    {
      title: "Feeney, ",
      date: "12:31 Pm, 11 June, 2023",
      subtitle: "Adaptive demand-driven attitude",
      id: 5,
    },
    {
      title: "norway, ",
      date: "12:31 Pm, 06 June, 2023",
      subtitle: "Adaptive demand-driven attitude",
      id: 6,
    },
  ]);

  const [selectedfeedback, setselectedfeedback] = useState(null);
  const getselectedfeedback = () => {
    return feedbacks.find((feedback) => feedback.id === selectedfeedback);
  };

  //   const buttonweekclassname = `btn-feedback-sort ${openbuttonweek ? "active" : ""} ${openfeedback ? "btn-feedback-sort-NX" : ""}`;
  const buttonfeedbackstateclassname = `${
    openfeedback
      ? "feedback-history-body-card-NX"
      : "feedback-history-body-card"
  }`;

  const historybody1classname = `${
    openfeedback ? "feedback-history-body-1-NX" : "feedback-history-body-1"
  }`;


  return (
    <>
      <div className="container manage-feedback">
        <Cover text={"Feedback"} list1={"Home"} img={imgCover} />
        <div className="container feedback-history">
          <div className="feedback-history-split">
            <div className={historybody1classname}>
              <div className="feedback-history-top">
                <h1
                  className={`${
                    openfeedback
                      ? "feedback-history-top-review-NX"
                      : "feedback-history-top-review"
                  }`}
                >
                  Review
                </h1>
                <div className="dropdown">
                  <ButtonComponent
                    type={"button"}
                    className={`btn-feedback-sort ${
                      openbuttonweek ? "active" : ""
                    }`}
                    buttonName={selectedOption}
                    imgUrlEnd={
                      openbuttonweek ? Icon2Expandless : Icon1Expandmore
                    }
                    imgClassName={"btn-feedback-sort-img"}
                    onClick={handleOpenbtn}
                  />
                  {openbuttonweek ? (
                    <ul className="feedback-sort-menu">
                      <li className="menu-item feedback-sort-menu-option">
                        <ButtonComponent
                          type={"button"}
                          className={"btn-feedback-sort-menu"}
                          buttonName={"Today"}
                          onClick={() => handleMenuSelection("Today")}
                        />
                        <ButtonComponent
                          type={"button"}
                          className={"btn-feedback-sort-menu"}
                          buttonName={"Yesterday"}
                          onClick={() => handleMenuSelection("Yesterday")}
                        />
                        <ButtonComponent
                          type={"button"}
                          className={"btn-feedback-sort-menu"}
                          buttonName={"This Week"}
                          onClick={() => handleMenuSelection("This Week")}
                        />
                        <ButtonComponent
                          type={"button"}
                          className={"btn-feedback-sort-menu"}
                          buttonName={"This Month"}
                          onClick={() => handleMenuSelection("This Month")}
                        />
                        <ButtonComponent
                          type={"button"}
                          className={"btn-feedback-sort-menu"}
                          buttonName={"This Year"}
                          onClick={() => handleMenuSelection("This Year")}
                        />
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>

              {feedbacks.length > 0 ? (
                feedbacks.map((feedback) => {
                  return (
                    <div
                      key={feedback.id}
                      className={buttonfeedbackstateclassname}
                    >
                      <ListMenuFeedbackCard
                        img={Icon3Anonymous}
                        judul={feedback.title}
                        date={feedback.date}
                        subJudul={feedback.subtitle}
                        className1={"listMenuFeedback p-2 d-flex flex-row"}
                        className2={"ps-3 pe-3"}
                        className3={"feedback-card-top"}
                        className4={"feedback-card-top-title"}
                        className5={"feedback-card-top-subtitle"}
                        onClick={(e) => {
                          setselectedfeedback(feedback.id);
                          setopenfeedback(true);
                        }}
                      />
                      <ButtonComponent
                        type={"button"}
                        className={"btn-feedback-body-card-delete"}
                        buttonName={"Delete"}
                        imgUrlStart={Icon4Deletecard}
                        imgClassName={"img-body-card-delete"}
                        onClick={() => handleDeleteFeedback(feedback.id)}
                      />
                    </div>
                  );
                })
              ) : (
                <div>data kosong</div>
              )}

              {/* <div className={buttonfeedbackstateclassname}>
                <ListMenuFeedbackCard
                  img={Icon3Anonymous}
                  judul={"Anonymous"}
                  date={"12.51 Pm, 20 July, 2023"}
                  subJudul={
                    "Friendly service, complete equipment, cleanliness may need more attention"
                  }
                  className1={"listMenuFeedback"}
                  className2={"ps-3 pe-3"}
                  className3={"feedback-card-top"}
                  className4={"feedback-card-top-title"}
                  className5={"feedback-card-top-subtitle"}
                  onClick={handleOpenfeedback}
                />
                <ButtonComponent
                  type={"button"}
                  className={"btn-feedback-body-card-delete"}
                  buttonName={"Delete"}
                  imgUrlStart={Icon4Deletecard}
                  imgClassName={"img-body-card-delete"}
                  onClick={handleOpenbtn}
                />
              </div> */}
            </div>
            {openfeedback ? (
              <>
                <hr className="middle-line" />
                <div className="feedback-history-body-2">
                  <div className="feedback-history-top-2">
                    <h1 className="feedback-history-top-2-detail">Detail</h1>
                  </div>
                  <CardFeedbackDetails
                    feedback={getselectedfeedback()}
                    className1={"feedback-card-detail"}
                    className2={"feedback-card-detail-top"}
                    className3={"feedback-card-detail-top-title"}
                    className4={"feedback-card-detail-top-date"}
                    className5={"feedback-card-detail-bottom"}
                    className6={"feedback-card-detail-bottom-title"}
                  />
                  <div className="feedback-history-bottom-back">
                    <ButtonComponent
                      type={"button"}
                      className={"btn-feedback-body-card-back"}
                      buttonName={""}
                      imgUrlStart={Icon5back}
                      imgClassName={"img-body-card-delete"}
                      onClick={handleclosefeedback}
                    />
                  </div>
                  <div className="feedback-history-bottom-2">
                    <ButtonComponent
                      type={"button"}
                      className={"btn-feedback-body-card-delete"}
                      buttonName={"Delete"}
                      imgUrlStart={Icon4Deletecard}
                      imgClassName={"img-body-card-delete"}
                      onClick={handleclosefeedback}
                    />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagesFeedback;
