import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props){
  return(
    <React.Fragment>
      {props.tapList.map(tap => 
        <Tap 
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

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
}

export default TapList;