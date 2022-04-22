import React from "react";
import NewTapForm from "./NewTapForm";
import TapDetail from "./TapDetail";
import TapList from "./TapList";

class TapControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      mainTapList: [],
      selectedTap: null
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTap !== null){
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} />
      buttonText = "Return to tap list";
    } else if (this.state.formVisible){
      currentlyVisibleState = <NewTapForm />
      buttonText= "Return to tap list";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList}/>
      buttonText= "Add tap";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )  
  }
}

export default TapControl;