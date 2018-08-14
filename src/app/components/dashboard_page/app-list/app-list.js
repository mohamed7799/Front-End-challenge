import React from "react";
import Appcard from "./app-card/app-card";
import "./app-list.css";
const Applist = () => {
  return (
    <div className="App-list">
      <div className="app__list">
        <Appcard />
        <Appcard />
        <Appcard />
        <Appcard />
        <Appcard />
        <Appcard />
        <Appcard />
      </div>
    </div>
  );
};

export default Applist;
