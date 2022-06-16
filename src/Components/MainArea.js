import React, { useState } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

const MainArea = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);

  const handleFilterVisibility = () => {
    console.log("Function called")
    filterVisibility ? setFilterVisibility(false) : setFilterVisibility(true);
    
  };

  return (
    <MainAreaWrapper>
      <Sidebar />
      <WidgetWrapper>
        <h1 className="h1">Dashboard</h1>
        <Widget 
        visibilityStatus={filterVisibility}
        onClickHandler={handleFilterVisibility} />
      </WidgetWrapper>
      <Filter
        visibilityStatus={filterVisibility}
        onClickHandler={handleFilterVisibility}
      ></Filter>
    </MainAreaWrapper>
  );
};
const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const MainAreaWrapper = styled.div`
  display: flex;
  position: relative;
  flex-grow: 1;
  width: 100%;
  background: #f6f9fd;
`;

export default MainArea;
