import React from "react";
import "./Header.css";
import searchIcon from "../Assets/assets/header/search.png";
import punklogo from "../Assets/assets/header/1194_logo_name.png";
import themeSwitchIcon from "../Assets/assets/header/theme-switch.png"
function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} className="punklogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" className="searchInput" placeholder="SEARCH ANYTHING ON PRITHVI'S MARKETPLACE" />
      </div>
       <div className="headerItems">
         <p>Drops</p>
         <p>Market Place</p>
         <p>Create</p>

       </div>
       <div className="headerActions">
         <div className="themeSwitchContainer">
           <img src={themeSwitchIcon} alt="" />
         </div>
       </div>
       <div className="loginButton">
         GET IN
       </div>

    </div>
  );
}

export default Header;
