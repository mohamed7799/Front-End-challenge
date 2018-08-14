import React, { Component } from "react";
import "./filter.css";
class Filter extends Component {
  state = {
    selected: "active"
  };
  choose = e => {
    let clickedItem = e.target;
    console.log(clickedItem);
    let clickedId = e.target.id;
    if (clickedId !== this.state.selected) {
      clickedItem.classList.add("selected");
      this.setState({ selected: clickedId });
      let oldItem = document.getElementById(this.state.selected);
      oldItem.classList.remove("selected");
    }
  };

  render() {
    return (
      <div className="filter">
        <div
          onClick={this.choose}
          className="filter__item selected"
          id="active"
        >
          <i className="fas fa-chart-line" /> Active 5
        </div>
        <div onClick={this.choose} className="filter__item" id="completed">
          <i className="fas fa-check" /> Completed 9
        </div>
        <div onClick={this.choose} className="filter__item" id="shared">
          <i className="fas fa-share" /> Shared 7
        </div>
        <div onClick={this.choose} className="filter__item" id="in setup">
          <i className="fas fa-cogs" /> In setup 34
        </div>
      </div>
    );
  }
}

export default Filter;
