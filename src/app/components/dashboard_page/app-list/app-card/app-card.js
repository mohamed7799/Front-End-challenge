import React from "react";
import "./app-card.css";
const Appcard = () => {
  return (
    <div className="App-card">
      <div className="App-info">
        <div className="info">
          <h2>App Name</h2>
          <div>
            <i className="fas fa-mobile-alt" /> 5
          </div>
          <div className="App__platforms">
            <i className="fab fa-chrome" />
            <i className="fab fa-android" />
          </div>
        </div>
        <div className="app-btns">
          <i className="fas fa-share" />
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>
      <div className="dummy_btns">
        <i className="fas fa-share" />
        <i className="fas fa-share" />
        <i className="fas fa-share" />
        <i className="fas fa-share" />
      </div>
    </div>
  );
};

export default Appcard;
