import React from "react";
import "../assest/Css/Content3.css";

//images
import Netflix from "../assest/image/Netflix.svg";
import Amazon from "../assest/image/amazon.svg";
import Discord from "../assest/image/Discord.svg";
import Reddit from "../assest/image/Reddilt.svg";
import Soptify from "../assest/image/Soptify.svg";

export default function Content3() {
  return (
    <div className="EcomServices">
      <div className="EcomWrapDiv">
        <img src={Netflix} alt="Netflix" className="ecomImg" />
      </div>
      <div className="EcomWrapDiv">
        <img src={Reddit} alt="Reddit" className="ecomImg" />
      </div>
      <div className="EcomWrapDiv">
        <img src={Amazon} alt="Amazon" className="ecomImg" />
      </div>
      <div className="EcomWrapDiv">
        <img src={Discord} alt="Discord" className="ecomImg" />
      </div>
      <div className="EcomWrapDiv">
        <img src={Soptify} alt="Soptify" className="ecomImg" />
      </div>
    </div>
  );
}
