import React, { useEffect, useState } from "react";
import "./Main.css";
import instagramLogo from "../Assets/assets/owner/instagram.png";
import twitterLogo from "../Assets/assets/owner/twitter.png";
import moreIcon from "../Assets/assets/owner/more.png";
import PunkList from "./PunkList";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkConatiner">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name} </div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHnadle">@prithvikami</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Main;
