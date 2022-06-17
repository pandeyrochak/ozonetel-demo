import React from "react";
import styled from "styled-components";
import "./Header.css";
import notificationIcon from "../assets/notification-icon.svg";
import ozonetelLogo from "../assets/ozonetel-logo.svg"; 

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="ozonetel-logo">
        <img src={ozonetelLogo} alt="ozonetel-logo" />
      </div>
      <div className="header-right">
        <div className="notification-icon">
          <img
            src={notificationIcon}
            alt="notification-icon"
          />
        </div>
        <div className="user-icon">CK</div>
      </div>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 25px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  z-index:1;
`;

export default Header;
