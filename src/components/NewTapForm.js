import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onHandleNewTap({name: event.target.name.value, brand: event.target.brand.value, price: parseFloat(event.target.price.value), alcoholContent: parseFloat(event.target.alcoholContent.value), volume: 124, id: v4()});
  }

  return (
    
    <React.Fragment>
      <Container>
        <Form onSubmit={handleNewTapFormSubmission}>
          <Form.Group>
            <Form.Control
              type='text'
              name='name'
              placeholder='Tap Name' />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              name='brand'
              placeholder='Brand' />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='number'
              name='price'
              step='0.01'
              placeholder='Price' />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='number'
              step='0.1'
              name='alcoholContent'
              placeholder='Alcohol Percentage' />
          </Form.Group>
          <Form.Group>
            <Button type='submit'>Add Tap</Button>
          </Form.Group>
        </Form>
      </Container>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onHandleNewTap: PropTypes.func
};

export default NewTapForm;