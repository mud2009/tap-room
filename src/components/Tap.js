import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenTapClicked(props.id)}>
        <h4>{props.name}</h4>
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