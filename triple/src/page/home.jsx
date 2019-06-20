import React, { Component } from "react";
import Nav from "../components/common/nav/nav";
import Enquiry from "../components/homePage/enquiry/enquiry";
import Feature from "../components/homePage/featuresCard/featureCard";
import Slider from "../components/mainPage/slider/slider";
import ProductBlock from "../components/common/productBlock/productBlock";
import PbSection from "../components/mainPage/productBlockSection/pbSection";
import tourService from "../services/tourServices";

class Home extends Component {
  state = {};
  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    let recommendTag = await tourService.getRecommendTag();

    for (var i = 0; i < 10; i++) {
      console.log(
        i,
        await tourService.getSearchByTag(recommendTag.recommendTags[i].title)
      );
    }
  }

  handleScroll(e) {
    document.getElementsByClassName("enquiry__layout")[0].style.opacity =
      1 - window.pageYOffset / 1000;
  }

  render() {
    return (
      <React.Fragment>
        <Nav id="homeNav" color=" loginNav__textColor" />
        <div className="enquiry__layout">
          <Enquiry />
        </div>
        <div className="container homePage">
          <Slider />
          <PbSection title="你可能喜歡" />
          <PbSection title="深度遊推介" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
