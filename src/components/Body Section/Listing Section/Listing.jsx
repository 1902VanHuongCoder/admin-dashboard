import React from "react";
import "../../../sass/Listing.css";
//import icons =============>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Listing = () => {
  return (
    <div className="listing">
      <div className="listingHeading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="listingContent flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src="./tree1.png" alt="tree1" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src="./tree.png" alt="tree1" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src="./tree1.png" alt="tree1" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src="./tree.png" alt="tree1" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="listingSeller flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src="./user1.jpg" alt="Users" />
              <img src="./user2.jpg" alt="Users" />
              <img src="./user3.jpg" alt="Users" />
              <img src="./user4.jpg" alt="Users" />
            </div>

            <div className="cardText">
              <span>
                {" "}
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src="./user4.jpg" alt="Users" />
              <img src="./user3.jpg" alt="Users" />
              <img src="./user2.jpg" alt="Users" />
              <img src="./user1.jpg" alt="Users" />
            </div>

            <div className="cardText">
              <span>
                {" "}
                28.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
