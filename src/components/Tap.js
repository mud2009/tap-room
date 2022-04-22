import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  if (props.volume < 1){
    return(
      <React.Fragment>
        <div>
          <div onClick={() => props.whenTapClicked(props.id)}>
            <h4>{props.name} - out of stock</h4>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        <div>
          <div onClick={() => props.whenTapClicked(props.id)}>
            <h4>{props.name} - {props.volume} pints left</h4>
          </div>
          <button onClick={() => props.whenPintPurchased(props.id)}>Purchase pint</button>
        </div>
      </React.Fragment>
    )  
  }
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  volume: PropTypes.number,
  whenPintPurchased: PropTypes.func,
  whenTapClicked: PropTypes.func
}

export default Tap;