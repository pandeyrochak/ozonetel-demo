import React, { useState } from "react";

import "./Widget.css";

const Widget = (props) => {
  const [downloadOptionsVisibility, setDownloadOptionsVisibility] =
    useState(false);

  const handleDownloadClick = () => {
    downloadOptionsVisibility
      ? setDownloadOptionsVisibility(false)
      : setDownloadOptionsVisibility(true);
  };

  return (
    <div className="widget-container">
      <div
        className="download-options"
        style={{ display: downloadOptionsVisibility ? "block" : "none" }}
      >
        <div className="as-pdf">
          <img src={require("../assets/as-pdf.png")} alt="" />
          <div className="h6">as PDF</div>
        </div>
        <div className="as-jpg">
          <img src={require("../assets/as-jpg.png")} alt="" />
          <div className="h6">as PDF</div>
        </div>
      </div>
      <div className="widget-header-row">
        <div className="widget-header-left">
          <div className="h5 widget-header-title">Call Status</div>
          <div className="widget-live">Live</div>
        </div>
        <div className="widget-header-right">
          <div className="download-button" onClick={handleDownloadClick}>
            <img src={require("../assets/download-icon.png")} alt="Download" />
          </div>
          <div className="filter-button" onClick={props.onClickHandler}>
            <img src={require("../assets/filter-icon.png")} alt="Filter" />
          </div>
        </div>
      </div>
      <div className="widget-tab-row">
        <div className="widget-tab active">All</div>
        <div className="widget-tab">Voice</div>
        <div className="widget-tab">Manual</div>
        <div className="widget-tab">Preview</div>
        <div className="widget-tab">Progressive</div>
        <div className="widget-tab">Blended</div>
      </div>
      <div className="widget-restore-filter-button">
        <button className="link-btn">Restore Filter</button>
      </div>
      <div className="widget-summary-1">
        <div className="summary-column">
          <div className="summary-item">
            <div className="h5 summary-title">Average Handling Time</div>
            <div className="summary-details">
              <div className="h2 summary-text">8:14</div>
              <div className="h5 summary-text-2">
                <span className="arrow-up"></span>
                <span>+3.20%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-column">
          <div className="summary-item">
            <div className="h6 summary-title">Avg. Talk Time</div>
            <div className="summary-details">
              <div className="h5 summary-text">6:59</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="h6 summary-title">Avg. Wrap-up time</div>
            <div className="summary-details">
              <div className="h5 summary-text">6:59</div>
            </div>
          </div>
        </div>
        <div className="summary-column">
          <div className="summary-item">
            <div className="h6 summary-title">Avg. Hold time</div>
            <div className="summary-details">
              <div className="h5 summary-text">0:31</div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-summary-2">
        <div className="summary-container-shadow">
          <div className="summary-column">
            <div className="summary-item">
              <div className="h5 summary-title">Average Handling Time</div>
              <div className="summary-details">
                <div className="h2 summary-text">8:14</div>
                <div className="h5 summary-text-2">
                  <span className="arrow-up"></span>
                  <span>+3.20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-container-shadow">
          <div className="summary-column">
            <div className="summary-item">
              <div className="summary-title h5">Total Calls</div>
              <div className="h2 summary-text">121</div>
            </div>
          </div>
          <div className="totals">
            <div className="summary-column">
              <div className="h6 summary-title">Total Answered</div>
              <div className="h6 summary-title">Total Abandoned</div>
              <div className="h6 summary-title">Active Calls</div>
            </div>
            <div className="summary-column">
              <div className="h5 summary-text">30</div>
              <div className="h5 summary-text">30</div>
              <div className="h5 summary-text">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
