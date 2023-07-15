/** @format */

import React, { useState } from "react";
import Button from "../../../../Button";
import plus from "../../../../../assets/icons/plus.svg";
import seemorelist from "../../../../../assets/icons/chevron-up.svg";
import seedownlist from "../../../../../assets/icons/chevron-down.svg";
import { QuestionnaireDetails } from "./Question";

const QuestionContent = () => {
  return (
    <div>
      {QuestionnaireDetails.map((f, i) => (
        <QuestionSection key={i} data={f} />
      ))}
    </div>
  );
};
export default QuestionContent;

const QuestionSection = ({ data }) => {
  const [openSeemore, setOpenSeemore] = useState(false);
  return (
    <div>
      <div className="question_button">
        <Button variant="secondary" size="medium" image={plus}>
          Add questionnaire
        </Button>
      </div>
      <div className="questionnaire_one_all">
        <div className="questionnaire_one">
          <h4>{data.title}</h4>
          <div className="wait_button">
            <Button variant="secondary" size="small">
              Waiting for answer
            </Button>
          </div>
        </div>
        <div className="ask_date">
          <h4>ASKED DATE</h4>
          <h4 id="date">08 June, 2023.</h4>
        </div>
        <div className="negotiate_seemore" onClick={() => setOpenSeemore(true)}>
          <h4>See more</h4>
          <img src={seemorelist} alt="icon" />
        </div>
      </div>
      {openSeemore && (
        <div className="questionnaire_two_all">
          <div className="questionnaire_two_head">
            <h4>Questionnaire 2</h4>
            <Button variant="secondary" size="small">
              Answered
            </Button>
          </div>
          {data.content.map((f, i) => (
            <div className="questionnaire_two">
              <div className="individual_questionnaire">
                <div className="questionnaire_number">
                  <h5>
                    {i + 1}. {f.heading}
                  </h5>
                </div>
                <div className="link_para">
                  <img src={f.icon1} alt="icon" />
                  <h5> {f.icon1para} </h5>
                </div>
                <p> {f.paragraph} </p>
                <div className="link_para" id="link_para_another">
                  <img src={f.icon1} alt="icon" />
                  <h5> {f.icon1para} </h5>
                </div>
                <div className="file_para">
                  <img src={f.icon2} alt="icon" />
                  <h5>{f.icon2para}</h5>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="questionnaire_two">{data.content.map}</div> */}
          <div className="ask_answer">
            <div className="ask_date">
              <h4>ASKED DATE</h4>
              <h4 id="date">08 June,2023.</h4>
            </div>
            <div className="ans_date">
              <h4>ANSWERED DATE</h4>
              <h4 id="date">09 June,2023.</h4>
            </div>
          </div>
          <div
            className="negotiate_seedown"
            onClick={() => setOpenSeemore(false)}
          >
            <h4>See less</h4>
            <img src={seedownlist} alt="icon" />
          </div>
        </div>
      )}
    </div>
  );
};