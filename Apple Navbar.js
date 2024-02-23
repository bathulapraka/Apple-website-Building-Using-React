import React, { useState } from "react";
import "../src/Navbar.css";
import Iphone from "./Iphone pro";
import logo from "./Images Apples/search.png";
import Camera from "./Iphone-back-camera";

const NAVIGATIONBAR = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="Desktop">
      <nav className="Allitems">
        <div className="Apple-logo"></div>
        <div className="navbar-store">
          <a href="store-nav">Store</a>
        </div>
        <div className="navbar-mac">
          <a href="store-nav">Mac</a>
        </div>
        <div className="navbar-ipad">
          <a href="store-nav">ipad</a>
        </div>
        <div className="navbar-iphone">
          <a href="store-nav">iphone</a>
        </div>
        <div className="navbar-watch">
          <a href="store-nav">Watch</a>
        </div>
        <div className="navbar-Airpodes">
          <a href="store-nav">Airpodes</a>
        </div>
        <div className="navbar-Tv">
          <a href="store-nav">Tv&Home</a>
        </div>
        <div className="navbar-entertainment">
          <a href="store-nav">Entertainment</a>
        </div>
        <div className="navbar-accessories">
          <a href="store-nav">Accessories</a>
        </div>
        <div className="navbar-support">
          <a href="store-nav">Support</a>
        </div>
        <div className="Search-bar" onClick={handleToggle}></div>
        <div className="cart"></div>
      </nav>

      {/* Search bar icon */}
      {show && (
        <div className="search-bar-icon">
          <div className="Search-item-Setting">
            <div className="searching-icon"></div>
            <form className="input-field">
              <img src={logo} className="logo" alt=""></img>
              <input
                type="text"
                className="text-field"
                placeholder="Search apple.com"
              ></input>
            </form>
            <div className="closing-icon"></div>
            <div className="Recent-list">
              <h2 className="h2case">Quick links</h2>
              <ul className="Allcaselinks">
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Airpodes</a>
                </li>
                <li>
                  <a href="#">AirTag</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <Iphone/>
      <Camera/>
    </div>
  );
};

export default NAVIGATIONBAR;
