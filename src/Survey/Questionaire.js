import React from "react";
import "../Survey/Questionaire.css";

function Survey() {
  return (
    <div>
      <div className="title">
        <h1>Student Survey Form</h1>
      </div>
      <div className="form">
        <form>
          <div className="question-one">
            <label className="question-one-label">
              Overall, How would you rate your day yesterday?
            </label>
            <br />
            <div className="inputs-one">
              <input type="radio" name="day-rating" id="1" className="radio-button"/>
              <input type="radio" name="day-rating" id="2" className="radio-button"/>
              <input type="radio" name="day-rating" id="3" className="radio-button"/>
              <input type="radio" name="day-rating" id="4" className="radio-button"/>
              <input type="radio" name="day-rating" id="5" className="radio-button"/>
              <input type="radio" name="day-rating" id="6" className="radio-button"/>
              <input type="radio" name="day-rating" id="7" className="radio-button"/>
              <input type="radio" name="day-rating" id="8" className="radio-button"/>
              <input type="radio" name="day-rating" id="9" className="radio-button"/>
              <input type="radio" name="day-rating" id="10" className="radio-button"/>
            </div>
            <br />
            <h6>1 2 3 4 5 6 7 8 9 10</h6>
            <br />
          </div>

          <div className="question-two">
            <label className="question-two-label">
              What is your stress level pertaining to schoolwork?
            </label>
            <br />
            <div className="inputs-two">
            <input type="radio" name="school-stress-rating" id="1" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="2" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="3" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="4" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="5" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="6" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="7" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="8" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="9" className="radio-button"/>
            <input type="radio" name="school-stress-rating" id="10" className="radio-button"/>
            </div>
            <br />
            <h6>1 2 3 4 5 6 7 8 9 10</h6>
            <br />
          </div>

          <div className="question-three">
            <label className="question-three-label">
              What is your stress level pertaining to your personal life?
            </label>
            <br />
            <div className="inputs-three">
            <input type="radio" name="personal-stress-rating" id="1" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="2" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="3" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="4" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="5" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="6" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="7" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="8" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="9" className="radio-button"/>
            <input type="radio" name="personal-stress-rating" id="10" className="radio-button"/>
            </div>
            <br />
            <h6>1 2 3 4 5 6 7 8 9 10</h6>
            <br />
          </div>

          <div className="question-four">
            <label className="question-four-label">
              How is your home life?
            </label>
            <br />
            <div className="inputs-four">
              <input type="radio" name="home-rating" id="1" className="radio-button"/>
              <input type="radio" name="home-rating" id="2" className="radio-button"/>
              <input type="radio" name="home-rating" id="3" className="radio-button"/>
              <input type="radio" name="home-rating" id="4" className="radio-button"/>
              <input type="radio" name="home-rating" id="5" className="radio-button"/>
              <input type="radio" name="home-rating" id="6" className="radio-button"/>
              <input type="radio" name="home-rating" id="7" className="radio-button"/>
              <input type="radio" name="home-rating" id="8" className="radio-button"/>
              <input type="radio" name="home-rating" id="9" className="radio-button"/>
              <input type="radio" name="home-rating" id="10" className="radio-button"/>
            </div>
            <br />
            <h6>1 2 3 4 5 6 7 8 9 10</h6>
            <br />
          </div>

          <div className="question-five">
            <label className="question-five-label">
              How is your relationship with your parent / gaurdian ?
            </label>
            <br />
            <div className="inputs-five">
            <input type="radio" name="mental-rating" id="1" className="radio-button"/>
            <input type="radio" name="mental-rating" id="2" className="radio-button"/>
            <input type="radio" name="mental-rating" id="3" className="radio-button"/>
            <input type="radio" name="mental-rating" id="4" className="radio-button"/>
            <input type="radio" name="mental-rating" id="5" className="radio-button"/>
            <input type="radio" name="mental-rating" id="6" className="radio-button"/>
            <input type="radio" name="mental-rating" id="7" className="radio-button"/>
            <input type="radio" name="mental-rating" id="8" className="radio-button"/>
            <input type="radio" name="mental-rating" id="9" className="radio-button"/>
            <input type="radio" name="mental-rating" id="10" className="radio-button"/>
            </div>
            <br />
            <h6>1 2 3 4 5 6 7 8 9 10</h6>
            <br />
          </div>

          <div className="question-six">
            <label className="question-six-label">
              How many meals did you recieve yesterday?
            </label>
            <br />
            <div className="inputs-six">
            <input type="radio" name="diet-rating" id="0" className="radio-button"/>
            <input type="radio" name="diet-rating" id="1" className="radio-button"/>
            <input type="radio" name="diet-rating" id="2" className="radio-button"/>
            <input type="radio" name="diet-rating" id="3" className="radio-button"/>
            <input type="radio" name="diet-rating" id="4" className="radio-button"/>
            </div>
            <br />
            <h6>0 1 2 3 3+</h6>
            <br />
          </div>

          <div className="question-seven">
            <label className="question-seven-label">
              How much physical activity did you recieve yesterday?
            </label>
            <br />
            <div className="inputs-seven">
            <input type="radio" name="physical-rating" id="0" className="radio-button"/>
            <input type="radio" name="physical-rating" id=".5" className="radio-button"/>
            <input type="radio" name="physical-rating" id="1" className="radio-button"/>
            <input type="radio" name="physical-rating" id="1+" className="radio-button"/>
            </div>
            <br />
            <h6>0 30 min 1 hour 1+ hours</h6>
            <br />
          </div>

          <div className="question-eight">
            <label className="question-eight-label">
              Are you currently involved in an extra-curricular activity?
            </label>
            <br />
            <div className="inputs-eight">
            <input type="radio" name="extra-curricular-rating" id="no" className="radio-button"/>
            <input type="radio" name="extra-curricular-rating" id="yes" className="radio-button"/>
            </div>
            

            <br />
            <h6>no   yes</h6>
            <br />
          </div>

          <div className="question-nine">
            <label className="question-nine-label">
              Are you currently employed?
            </label>
            <br />
            <div className="inputs-nine">
            <input type="radio" name="employment-rating" id="yes" className="radio-button"/>
            <input type="radio" name="employment-rating" id="no" className="radio-button"/>
            </div>
            <br />
            <h6>no   yes</h6>
            <br />
          </div>

          <div className="question-ten">
            <label className="question-ten-label">
              Would you like to speak to a therapist / counselor when it is
              convinient to you?
            </label>
            <br />
            <div className="inputs-ten">
            <input type="radio" name="speak-rating" id="yes" className="radio-button"/>
            <input type="radio" name="speak-rating" id="no" className="radio-button"/>
            </div>
            <br />
            <h6>no  yes</h6>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Survey;
