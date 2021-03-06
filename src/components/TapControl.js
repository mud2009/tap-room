import React from "react";
import NewTapForm from "./NewTapForm";
import TapDetail from "./TapDetail";
import TapList from "./TapList";
import Button from "react-bootstrap/Button";

class TapControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      mainTapList: [],
      selectedTap: null
    }
  }

  handleClick = () => {
    if (this.state.selectedTap !== null){
      this.setState({
        formVisible: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddNewTap = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({mainTapList: newMainTapList,
                  formVisible: false});
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handlePintPurchase = (id) => {
    const purchasedPint = this.state.mainTapList.filter(tap => tap.id === id)[0];
    if (purchasedPint.volume > 0){
      purchasedPint.volume = purchasedPint.volume - 1
    }
    let purchasedPintList = this.state.mainTapList
      .filter(tap => tap.id !== purchasedPint.id)
      .concat(purchasedPint)
    this.setState({
      mainTapList: purchasedPintList,
      selectedTap: null
    })
  }

  handleDeleteTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null
    })
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTap !== null){
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} onDeleteTap={this.handleDeleteTap}/>
      buttonText = "Return to tap list";
    } else if (this.state.formVisible){
      currentlyVisibleState = <NewTapForm onHandleNewTap={this.handleAddNewTap} />
      buttonText= "Return to tap list";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList}
        onTapSelection={this.handleChangingSelectedTap}
        onPintPurchase={this.handlePintPurchase}/>
      buttonText= "Add tap";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )  
  }
}

export default TapControl;