import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const {tap} = props;
  return(
    <React.Fragment>
      <h3>{tap.name}'s Details</h3>
      <p>Brand: {tap.brand}</p>
      <p>Price: ${tap.price}</p>
      <p>ABV: {tap.alcoholContent}%</p>
      <h3>Pints left: {tap.volume}</h3>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
}

export default TapDetail;