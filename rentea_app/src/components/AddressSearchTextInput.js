import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  SUBMIT_A_REVIEW,
  PROPERTY_TYPE,
  ADDRESS_PRIMARY,
  ADDRESS_SECONDARY,
  CITY,
  STATE,
  ZIP,
  NAME,
  EMAIL,
  SUBMIT_REVIEW,
  LANDLORD,
} from "./review/ReviewConstants";
import {
  Dropdown,
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";

const AddressSearchTextInput = (props) => {
  const onSubmitForm = () => {
    props.onClose();
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search Address
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Container fluid>
          <Modal.Dialog>
            <Modal.Header closeButton onHide={props.onClose}>
              <Modal.Title>{SUBMIT_A_REVIEW}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="propertType">
                    <Form.Label>{PROPERTY_TYPE}</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Condo</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>{ADDRESS_PRIMARY}</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>{ADDRESS_SECONDARY}</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>{CITY}</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>{STATE}</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>{ZIP}</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Form>
                <Badge variant="secondary">{LANDLORD}</Badge>
                <Form.Row>
                  <Form.Group as={Col} controlId="landloarName">
                    <Form.Label>{NAME}</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group as={Col} controlId="landloarName">
                    <Form.Label>{EMAIL}</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Review</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmitForm}>
                  {SUBMIT_REVIEW}
                </Button>
              </Form>
            </Modal.Footer>
          </Modal.Dialog>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AddressSearchTextInput;
