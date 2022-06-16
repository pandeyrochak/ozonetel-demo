import React from "react";
import styled from "styled-components";

const SidebarItem = (props) => {
  return (
    <SidebarItemWrapper className={props.className}>
      <div className="sidebar-icon">
        <img src={props.iconUrl} alt="" />
      </div>
      <div className="h6">{props.text}</div>
    </SidebarItemWrapper>
  );
};

const SidebarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  margin-bottom: 32px;
  cursor: pointer;

  .h6 {
    color: #99a0a8;
  }
  &.active {
    background: #e3ecfd;
    border-radius: 8px;
    color: #3d8bf8;
    font-weight: 600;
  }
  
`;

export default SidebarItem;
