import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenTapClicked(props.id)}>
        <h4>{props.name}</h4>
      </div>
      <button onClick={props.whenPintPurchased(props.id)}>Purchase pint</button>
    </React.Fragment>
  )
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