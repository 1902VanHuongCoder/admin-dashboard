import React from "react";
import "../../../sass/Activity.css";
import { BsArrowRightShort } from "react-icons/bs";
const Activity = () => {
  return (
    <div className="activity">
      <div className="activityContainer">
        <div className="activityHeading flex">
          <h1>Recent Orders</h1>
          <div className="btn flex">
            See All <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="orders grid">
          <div className="singleUser flex">
            <div className="userInfo flex">
              <img src="./user1.jpg" alt="user1" />
              <div className="name flex">
                John Wick
                <div> London, England</div>
              </div>
            </div>
            <div className="duration">2 minutes ago</div>
          </div>

          <div className="singleUser flex">
            <div className="userInfo flex">
              <img src="./user2.jpg" alt="user1" />
              <div className="name flex">
                John Wick
                <div> London, England</div>
              </div>
            </div>
            <div className="duration">2 minutes ago</div>
          </div>

          <div className="singleUser flex">
            <div className="userInfo flex">
              <img src="./user3.jpg" alt="user1" />
              <div className="name flex">
                John Wick
                <div> London, England</div>
              </div>
            </div>
            <div className="duration">2 minutes ago</div>
          </div>

          <div className="singleUser flex">
            <div className="userInfo flex">
              <img src="./user4.jpg" alt="user1" />
              <div className="name flex">
                John Wick
                <div> London, England</div>
              </div>
            </div>
            <div className="duration">2 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
