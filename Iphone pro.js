import React from "react";
import "../src/Navbar.css";
import logo from "./Images Apples/iphone setting pro max.webp";
const Iphone = () => {
  return (
    <div>
      <div className="All-details-iphone">
        <div className="details-camera">
         
          <h2 className="setIphone">iPhone 15 Pro</h2>
          <h1 className="para-phone">Titanium So strong.So light.So Pro.</h1>
          <h3 className="learning">Learn more</h3>
          <h3 className="buying-product">Buy</h3>
        
        </div>
      </div>
      <div>
      <img src={logo} className="iphonelogo" alt=""></img>
      </div>
    </div>
  );
};
export default Iphone;
