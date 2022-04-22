import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <div>
        <h4>{props.name}</h4>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.alcoholContent}%</p>
        <p>Pints left in keg: {props.volume}</p>
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  volume: PropTypes.number
}

export default Tap;