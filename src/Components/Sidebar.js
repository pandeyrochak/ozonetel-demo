import React from "react";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
// import "./Sidebar.css"

const Sidebar = () => {
  const menuOptions = [
    {
      id: 1,
      text: "Dashboard",
      imageUrl: require("../assets/dashboard-icon.png"),
      isActive:false
    },
    {
      id: 2,
      text: "Reports",
      imageUrl: require("../assets/reports-icon.png"),
      isActive:true
    },
    {
      id: 3,
      text: "Campaings",
      imageUrl: require("../assets/campaigns-icon.png"),
      isActive:false
    },
    {
      id: 4,
      text: "Admins",
      imageUrl: require("../assets/admin-icon.png"),
      isActive:false
    },
  ];
  return (
    <SidebarWrapper className="sidebar">
      {menuOptions.map((option) => {
        return (
          <SidebarItem
            key={option.id}
            text={option.text}
            iconUrl={option.imageUrl}
            className={ option.isActive ? "active" : ""}
          />
        );
      })}
    </SidebarWrapper>
  );
};
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 44px;
  padding-left: 6px;
  padding-right: 6px;
  background: #ffffff;
  border: 1px solid #e6e5e6;
`;

export default Sidebar;
