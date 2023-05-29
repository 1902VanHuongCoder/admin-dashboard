import React from "react";
import "../../sass/Sidebar.css";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillSound } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar grid">
      <div className="logoDiv flex">
        <img
          src="./logo.png"
          alt="logo"
          style={{ width: "30px", height: "30px" }}
        />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="menuTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <AiFillClockCircle className="icon" />
              <span className="smallText">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">Orders</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <SiProducthunt className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <BsNewspaper className="icon" />
              <span className="smallText">News</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="menuDiv">
        <h3 className="menuTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <BsFillPersonFill className="icon" />
              <span className="smallText">Account</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <SlScreenDesktop className="icon" />
              <span className="smallText">Display</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <MdPayment className="icon" />
              <span className="smallText">Payment</span>
            </a>
          </li>
          <li className="listItem">
            <a href="http://localhost:3000/" className="menuLink flex">
              <AiFillSound className="icon" />
              <span className="smallText">Sounds</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebarCard">
        <FaRegQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3> Help Center</h3>
          <p>
            Having trouble in Planti, please contact us from for more questions
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
