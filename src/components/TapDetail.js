import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const {tap, onDeleteTap} = props;
  return(
    <React.Fragment>
      <div>
        <h3>{tap.name}'s Details</h3>
        <p>Brand: {tap.brand}</p>
        <p>Price: ${tap.price}</p>
        <p>ABV: {tap.alcoholContent}%</p>
        <h3>Pints left: {tap.volume}</h3>
        <button onClick={() => onDeleteTap(tap.id)}>Remove Tap</button>
      </div>
      <br/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onDeleteTap: PropTypes.func
}

export default TapDetail;