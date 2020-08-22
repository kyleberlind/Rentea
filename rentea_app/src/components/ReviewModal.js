import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";

const ReviewModal = (props) => {
  const onSubmitForm = () => {
    props.onClose();
  };

  return (
    <Container fluid>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={props.onClose}>
          <Modal.Title>Submit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="propertType">
                <Form.Label>Property Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="landloarName">
                <Form.Label>Name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="landloarName">
                <Form.Label>Email</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" onClick={onSubmitForm}>
              Submit
            </Button>

          </Form>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
};
ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ReviewModal;
