import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import {BsArrowRightShort} from 'react-icons/bs'
import "../../../sass/Top.css";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="headerTitle flex">
          <h1>Welcom to Planti.</h1>
          <p>Hello Paul To, Welcom back!</p>
        </div>

        <div className="headerSearchBar flex">
          <input type="text" placeholder="Search Products" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="headerAdminSection flex">
          <span>
            {" "}
            <TbMessageCircle className="icon" />
          </span>

          <span>
            <MdNotificationsNone className="icon" />
          </span>
          <div className="userImage">
            <img src="./user.jpg" alt="user_image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraodinary products</h1>
          <p>
            The world's fast growing industry today are natural made products
          </p>
          <div className="button flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="video">
            <video src="./video.mp4" autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard">
          <div className="main flex">
            <div className="textDiv flex">
              <h1>My Stat</h1>

              <div className="flex">
                <span>Today <br /> <small>4 Orders</small></span>
                <span>This Month <br /> <small>127 Orders</small></span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className='icon' />
              </span>
            </div>

            <div className="imgDiv">
              <img src="./tree.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
