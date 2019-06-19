import React, { Component } from "react";
import M from "materialize-css";
import "../../css/tabs.css";

class DetailTabs extends Component {
  render() {
    const tour = this.props.tourContent;

    console.log("tab", tour);
    return (
      <div className="clearfix">
        <ul
          ref={Tabs => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
        >
          <li className="tab col s6 ">
            <a href="#test-swipe-1">行程安排</a>
          </li>
          <li className="tab col s6">
            <a href="#test-swipe-2">詳細資料</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="contentBg">
          {tour.days
            ? tour.days.map(day => (
                <div className="fontColor textStyle">
                  <b className="fontSize_24 ">{day.day}</b>
                  <div className=" fontSize_20">
                    {day.title} <br />
                    {day.stay}
                    {day.stay != " " ? <br /> : null}
                    {day.eat[0]}
                    {day.eat[0] ? <br /> : null}
                    {day.eat[1]}
                    {day.eat[1] ? <br /> : null}
                    {day.eat[2]}
                    {day.eat[2] ? <br /> : null}
                  </div>
                  <br />
                </div>
              ))
            : null}
          <span className="fontColor">{tour.notes}</span>

          <br />
        </div>
        <div id="test-swipe-2">
          <iframe
            src={this.props.pdf}
            frameborder="0"
            width="100%"
            height="595px"
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
}

export default DetailTabs;
