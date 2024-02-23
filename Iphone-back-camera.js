



import React from "react";
import logo from "./Images Apples/white iphone camera.webp";
const Camera=()=>{
    return (
        <div>
          <div className="All-iphone-camera">
            <div className="details-camera">
             
              <h2 className="setIphone-camera">iPhone 15 Pro</h2>
              <h1 className="para-phone-camera">Titanium So strong.So light.So Pro.</h1>
              <h3 className="learning-camera">Learn more</h3>
              <h3 className="buying-product-camera">Buy</h3>
            
            </div>
          </div>
          <div>
          <img src={logo} className="iphone-camera" alt=""></img>
          </div>
        </div>
      );
};
export default Camera;