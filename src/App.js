import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="image_college">
        <h3>Image college</h3>
      </div>
      <div className="profile_container">
        <div className="Trainer_name">
        <h1>SURAJ KUMAR</h1>
        </div>
        <div className="flex justify-around container1">
          <div className="flex exp">
            <h3 className="fiveplus">5+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="divPrice">
            <h3 className="price">₹ 300</h3>
          </div>
        </div>
        <div className="certified_div">
          <p>🗸 Certified</p>
        </div>
        <div className="aboutmeDiv">
          <h3 className="aboutmeHead">About me</h3>
          <p>I'm a professional personal fitness trainer and I am here to make you workout at home. You know that everyone is busy these days and no one has time for his body and health. That is why we have come to get you workouts from your home. SO please contact us.</p>
        </div>

        <div className="expertiseTab">
          <h3>My Expertise</h3>
          <div className="expertiseItems">
          <a >GYM </a>
          <a >YOGA </a>
          <a >BOXING </a>
          <a >TAKEWONDO </a>
          <a >SPORTS TRAINER</a>
          </div>
        </div>
        <div className="MCEtab">
        <h3>Medical Condition Experiencs</h3>
          <div className="MCEp">
          <p>Injury  |  Smoking Addiction  |  Anxiety  |   Drinking Addiction   |  Lung Disease</p>
          </div>
        </div>

        <div className="MYL">
        <h3>My Location</h3>
          <div className="MYLp">
          <p>Amritsar , Punjab</p>
          </div>
        </div>

        <div className="ModeOT">
          <h3>Mode of Training</h3>
          <div className="MOTItems">
            <p>Online (Google Meet)</p>
            <p>In home</p>
            <p>Outdoors</p>
          </div>
        </div>
        <div className="Pricing">
          <div className="flex">
            <h3 className="headprice">1-on-1 Pricing</h3>
          <img className="info_img" src="https://img.icons8.com/android/50/000000/info.png"/>
         </div>
           <div className="Pricing_items">
            <div className="Price1 price">
              <div className="plan_title">
                <h3>
                  STARTER PLAN
                </h3>
              </div>
              <div className="sessiondetails">
                <h2 className="detail1">Buy <span>5</span> sessions</h2>
                <h2 className="detail2">Rs <span>150/</span> session</h2>
              </div>
            </div>
            <div className="Price2 price">
              <div className="plan_title">
                <h3>
                POPULAR PLAN
                </h3>
              </div>
              <div className="sessiondetails">
                <h2 className="detail1">Buy <span>12</span> sessions</h2>
                <h2 className="detail2">Rs <span>138</span> / session</h2>
              </div>
            </div>
            <div className="Price3 price">
              <div className="plan_title">
                <h3>
                  BEST VALUE PLAN
                </h3>
              </div>
              <div className="sessiondetails">
                <h2 className="detail1">Buy <span>24</span> sessions</h2>
                <h2 className="detail2">Rs <span>127</span> / session</h2>
              </div>
            </div>
            </div>

            <div className="avail_tab">
              <h3>Availability</h3>
              <div className="avail_items">
              <a > 6:00 AM TO 7:00 AM</a>
              <a > 10:30 AM TO 11:30 AM</a>
              <a > 11:00 AM TO 12:00 AM</a>
              <a > 12:28 PM TO 1:28 PM</a>
              <a > 1:00 PM TO 2:00 PM</a>
              <a > 2:30 AM TO 3:30 AM</a>
              </div>
            </div>

            

        </div>
        <div className="TD_tab">
        <h3>Training Days</h3>
          <div className="TDp">
          <p>Injury  |  Smoking Addiction  |  Anxiety  |   Drinking Addiction   |  Lung Disease</p>
          </div>
        </div>

        <div className="ModeOT">
          <h3>Languages</h3>
          <div className="MOTItems">
            <div className="lan">
            <img src="https://img.icons8.com/material-outlined/50/000000/globe--v2.png"/>
            <p>Hindi</p>
            </div>
            <div className="lan">
            <img src="https://img.icons8.com/material-outlined/50/000000/globe--v2.png"/>
            <p>English</p>
            </div>
            <div className="lan">
            <img src="https://img.icons8.com/material-outlined/50/000000/globe--v2.png"/>
            <p>Punjabi</p>
            </div>
          </div>
        </div>
        <div className="MYL">
          <h3>Educational Qualification</h3>
          <div className="MYLp">
            <p>B.Sc in Sport and Excercise Science</p>
          </div>
        </div>

        <div className="Interest_tab">
          <h3>People I love training with</h3>
          <div className="Interest_Items">
          <a >ACTORS </a>
          <a >MEN </a>
          <a >WOMEN </a>
          <a >BEGINNERS </a>
          <a >MODEL</a>
          <a>YOUTH</a>
          <a>OVERWEIGHT</a>
          <a>BODYBUILDERS</a>
          <a>OVERWEIGHT/OBESE</a>
          <a>MILITARY</a>
          <a>SPECIALLY ABLE</a>
          </div>
        </div>
        <div className="final_buttons">
          <a class="join_button">JOIN BOOTCAMP</a>
          <a className="Book_Button">BOOK NOW</a>
        </div>

      </div>

    </div>
  );
}

export default App;
