import React, { useState } from "react";
import "./Filter.css";
import closeIcon from "../assets/close-btn.svg";

const Filter = (props) => {
  let filterOptions = [
    {
      id: 1,
      option: "UK Sales",
    },
    {
      id: 2,
      option: "Premium Plus",
    },
    {
      id: 3,
      option: "EU Sales",
    },
    {
      id: 4,
      option: "VIP",
    },
    {
      id: 5,
      option: "EU Tec",
    },
    {
      id: 6,
      option: "Africa Scales",
    },
    {
      id: 7,
      option: "Mexico Tec",
    },
    {
      id: 8,
      option: "Africa Tec",
    },
    {
      id: 9,
      option: "Premium Plus",
    },
    {
      id: 10,
      option: "Iran Tec",
    },
    {
      id: 11,
      option: "UK Sales",
    },
    {
      id: 12,
      option: "Premium Plus",
    },
    {
      id: 13,
      option: "EU Sales",
    },
    {
      id: 14,
      option: "VIP",
    },
    {
      id: 15,
      option: "EU Tec",
    },
    {
      id: 16,
      option: "Africa Scales",
    },
    {
      id: 17,
      option: "Mexico Tec",
    },
    {
      id: 18,
      option: "Africa Tec",
    },
    {
      id: 19,
      option: "Premium Plus",
    },
    {
      id: 20,
      option: "Iran Tec",
    },
  ];

  const [checked, setChecked] = useState(
    new Array(filterOptions.length).fill(false)
  );

  const handleCheckBox = (position) => {
    const updatedStates = checked.map((item, index) => {
      return (index === position ? !item : item)
    });
    setChecked(updatedStates);
  };
  const handleCheckAll = () => {
    const updatedStates = checked.map((item) => {
      return true;
    });
    setChecked(updatedStates);
  };
  const handleClearAll = () => {
    const updatedStates = checked.map((item) => {
      return false;
    });
    setChecked(updatedStates);
  };

  return (
    <div
      className="filter-wrapper"
      style={{ display: props.visibilityStatus ? "flex" : "none" }}
    >
      <div>
        <div className="filter-header">
          <div className="h4 left-title">Filter</div>
          <div className="close-button" onClick={props.onClickHandler}>
            <img src={closeIcon} alt="close" />
          </div>
        </div>
        <div className="search-row">
          <div className="skill-dropdown">
            <select
              className="skill-select"
              id="skill-select"
              name="skill-select"
            >
              <option value="Skill" selected>
                Skill
              </option>
              <option value="Skill-1">Skill 2</option>
              <option value="Skill-2">Skill 3</option>
              <option value="Skill-3">Skill 4</option>
              <option value="Skill-4">Skill 5</option>
            </select>
          </div>
          <div className="search-input">
            <input type="text" className="form-input" placeholder="Search" />
          </div>
        </div>
        <div className="button-row">
          <button className="link-btn" onClick={handleCheckAll}>
            Select All
          </button>
          <button className="link-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
        <div className="options-container">
          {filterOptions.map((item, index) => {
            return (
              <div className="option" key={index}>
                <label>
                  <input
                    type="checkbox"
                    name=""
                    checked={checked[index]}
                    onChange={() => handleCheckBox(index)}
                  />
                  <span style={{ marginLeft: 8 }}>{item.option}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="apply-filter-btn-wrapper">
        <button className="apply-filter">Apply Filter</button>
        <div className="tip-text">
          Adding more than 5 filters will take you to table view
        </div>
      </div>
    </div>
  );
};

export default Filter;
