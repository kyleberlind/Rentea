import React,{useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';

const SignUpModal = props => {
  return (
    <Modal.Dialog>
      <Modal.Header
        closeButton
      >
        <Modal.Title>Create an account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={
            () => props.setIsSignUpModalOpen(false)
          }
        >
          Close
        </Button>
        <Button
          variant="primary"
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}



export default SignUpModal;
