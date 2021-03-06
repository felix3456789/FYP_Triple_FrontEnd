import React, { Component } from "react";
import StarRatings from "react-star-ratings";

class StarRate extends Component {
  render() {
    return (
      <React.Fragment>
        <StarRatings
          rating={this.props.rating}
          starDimension="15px"
          starSpacing="2px"
          starRatedColor="#0d47a1"
        />
      </React.Fragment>
    );
  }
}

export default StarRate;
