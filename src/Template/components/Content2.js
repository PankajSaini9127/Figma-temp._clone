import React from "react";
import "../assest/Css/content2.css";

//images
import Free from "../assest/image/Free.svg";
import Right from "../assest/image/right.svg";
import Globle from "../assest/image/Globe.svg";

export default function Content2() {
  return (
    <>
      <section>
        <div className="main1">
          <p className="choosePlan">Choose Your Plan</p>
        </div>
        <div className="main1">
          <p className="offerline">
            Let`s choose the package that is best for you and explore in happily
            and cheerfully.
          </p>
        </div>
      </section>

      <section>
        <div className="main1">
          <div className="offertype">
            <div className="planImageDiv">
              <img src={Free} alt="freeplan" className="PlanImg" />
            </div>

            <p className="planFree">Free Plan</p>

            <ul className="planList">
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Unlimited Bandwitch
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Encrypted Connection
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                No Traffic Logs
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Work on All Devices
              </li>
            </ul>
                <div className="priceOffer">
                <p className="Price">
                  <b>Free</b>
                </p>
                <button className="BuyButton"> Select</button>
                </div>
          </div>

          <div className="offertype">
            <div className="planImageDiv">
              <img src={Free} alt="freeplan" className="PlanImg" />
            </div>
            <p className="planFree">Standard Plan</p>
            <ul className="planList">
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Unlimited Bandwitch
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Encrypted Connection
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Yes Traffic Logs
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Work on All Devices
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Connect Anyware
              </li>
            </ul>
            <div className="priceOffer">
              <p className="Price">
                <b>$09</b>/Mo
              </p>
              <button className="BuyButton "> Select</button>
            </div>
          </div>
          <div className="offertype">
            <div className="planImageDiv">
              <img src={Free} alt="freeplan" className="PlanImg" />
            </div>
            <p className="planFree">Premium Plan</p>
            <ul className="planList">
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Unlimited Bandwitch
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Encrypted Connection
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Yes Traffic Logs
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Work on All Devices
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Connect Anyware
              </li>
              <li className="ListIttem1">
                <img src={Right} alt="right" className="list2" />
                Get New Features
              </li>
            </ul>
            <div className="priceOffer">
              <p className="Price">
                <b>$12</b>/Mo
              </p>
              <button className="BuyButton activeBuybtn"> Select</button>
            </div>
          </div>
        </div>

        
        <div className="globleDiv">
          <div className="MainGlobalHeading">
            <p>Huge Global NetWork of Fast VPN</p>
          </div>
          <div className="mainGlobleSubHead">
            <p>
              see<b>LaslesVPN</b> everywhere to make it easier for you when you
              move Locations.
            </p>
          </div>
          <div className="globleImg">
            <img src={Globle} alt="globle pic" className="globlepic" />
          </div>
        </div>
      </section>
    </>
  );
}
