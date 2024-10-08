import React, { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import {BsArrowRightShort} from 'react-icons/bs'
import "../../../sass/Top.css";
import { sidebarContext } from "../../../contexts/sidebarContext";
import { GiHamburgerMenu } from "react-icons/gi";
const Top = () => {
  const {isSidebar, func } = useContext(sidebarContext);
  const handleShowSidebar = () => {
    func(!isSidebar);
    console.log("Hello");
  }
  return (
    <div className="topSection">
      <div className="headerSection">
        <div className="headerTitle">
          <h1><span>Welcom to Planti<span>.</span></span><span onClick={handleShowSidebar}><GiHamburgerMenu /></span></h1>
          <p>Hello Paul To, Welcom back!</p>
        </div>

        <div className="headerSearchBar">
          <input type="text" placeholder="Search Products" />
          <BiSearchAlt className="icon" />
        </div>
        

        <div className="headerAdminSection">
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
