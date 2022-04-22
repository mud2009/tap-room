import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props){
  if(props.tapList.length === 0){
    return (
      <React.Fragment>
        <h4>No taps added yet!</h4>
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        {props.tapList.map(tap => 
          <Tap 
            whenTapClicked={props.onTapSelection}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            alcoholContent={tap.alcoholContent}
            volume={tap.volume}
            id={tap.id}
            key={tap.id}/>
          )}
      </React.Fragment>
    );
  }
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
}

export default TapList;