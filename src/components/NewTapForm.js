import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onHandleNewTap({name: event.target.name.value, brand: event.target.brand.value, price: parseFloat(event.target.price.value), alcoholContent: parseFloat(event.target.alcoholContent.value), volume: 124, id: v4()});
  }

  return (
    
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Tap Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          step='0.01'
          placeholder='Price' />
        <input
          type='number'
          step='0.1'
          name='alcoholContent'
          placeholder='Alcohol Percentage' />
        <button type='submit'>Add Tap</button>
      </form>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onHandleNewTap: PropTypes.func
};

export default NewTapForm;