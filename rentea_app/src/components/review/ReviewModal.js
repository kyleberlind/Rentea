import React, { useState } from "react";
import PropTypes from "prop-types";
import GoogleMapsAddressSearchTextInput from "../../googleMaps/GoogleMapsAddressSearchTextInput";
import { addLandlordReviewByAddress } from "../../services";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Badge,
} from "react-bootstrap";
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
} from "./ReviewConstants";

const ReviewModal = (props) => {
  const [landlordData, setLandLordData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    review: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmitReview = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(false);
    console.log("submit")
    // addLandlordReviewByAddress(props.address?.formatted_address, landlordData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // props.onClose();
  };

  const handleChange = (e) => {
    setLandLordData({
      ...landlordData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container fluid>
      <Modal.Dialog>
        <Modal.Header closeButton onHide={props.onClose}>
          <Modal.Title>{SUBMIT_A_REVIEW}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated} onSubmit={e => {handleSubmitReview(e)}}>
            <Form.Row>
              <Form.Group as={Col} controlId="address">
                <Form.Label>Address</Form.Label>
                <GoogleMapsAddressSearchTextInput
                  address={props.address}
                  setAddress={props.setAddress}
                />
              </Form.Group>
            </Form.Row>
          </Form>
          <Form>
            <Badge variant="primary">{LANDLORD}</Badge>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  value={landlordData.firstName}
                  name="firstName"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  value={landlordData.lastName}
                  name="lastName"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>{EMAIL}</Form.Label>
                <Form.Control
                  required
                  onChange={handleChange}
                  value={landlordData.email}
                  name="email"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="validationCustom03">
              <Form.Label>Review</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="3"
                onChange={handleChange}
                value={landlordData.review}
                name="review"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              {SUBMIT_REVIEW}
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Container>
  );
};
ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ReviewModal;
