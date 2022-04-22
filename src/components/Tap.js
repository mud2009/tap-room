import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

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
          <Button onClick={() => props.whenPintPurchased(props.id)}>Purchase pint</Button>
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