import React from "react";


import MainBackground from "../assest/image/user1.svg";
import User from "../assest/image/user.svg";
import Server from "../assest/image/server.svg";
import Location from "../assest/image/Location.svg";
import Right from '../assest/image/right.svg'
import User2 from "../assest/image/user2.svg"

import "../assest/Css/content.css";

export default function Content() {
  return (
    <>
      <div className="content">
        <div className="content1 contentItem">
          <p className="content1heading">
            Want anything to be easy with <span>LaslesVPN</span>
          </p>
          <p className="content1subhead">
            Provide a networsk for all your needs with ease and fun using{" "}
            <span>LaslesVPN</span> discover intersting features from us.
          </p>
          <button className="getStartedBtn">Get Started</button>
        </div>
        <div className="content2 contentItem">
          <img className="mainImage" src={MainBackground} />
        </div>
      </div>

      <section>
        <div className="maincontent1">
          <div className="mainContentItem">
            <img src={User} alt="user" className="content1img" />
            <div>
              <p>90+</p>
              <p>Users</p>
            </div>
          </div>
          <div className="mainContentItem">
            <img src={Location} alt="location" className="content1img" />
            <div>
              <p>30+</p>
              <p>Locations</p>
            </div>
          </div>
          <div className="mainContentItem">
            <img src={Server} alt="server" className="content1img" />
            <div>
              <p>50+</p>
              <p>Servers</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="maincontent1 content2nd">
        <div className="content3rd">
            <div className="content2">
                <img src={User2} alt="user2nd" className="mainImage" /> 
            </div>
         </div>
            <div className="sideSection3">
              <span className="sectionHead3">We Provide Many Features You Can Use</span>
              <span className="sectionSubhead3">You can explore the features that we provide with fun and have their own function each feature.</span>
              <ul className="ListSection3">
                <li className="contentlistitem"><img className="contectListimg" src={Right} alt="right"/>  Powerfull online protection.</li>
                <li className="contentlistitem"><img className="contectListimg" src={Right} alt="right"/> Internet without borders</li>
                <li className="contentlistitem"><img className="contectListimg" src={Right} alt="right"/> Supercharge VPN</li>
                <li className="contentlistitem"><img className="contectListimg" src={Right} alt="right"/> No specific time limits.</li>
              </ul>
            </div>
        </div>
        

      </section>
    </>
  );
}
