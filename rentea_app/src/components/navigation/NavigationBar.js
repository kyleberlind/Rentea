import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { SUBMIT_A_REVIEW } from "../review/ReviewConstants";
import ReviewModal from "../review/ReviewModal";
import GoogleMapsAddressSearchTextInput from "../../googleMaps/GoogleMapsAddressSearchTextInput";

const NavigationBar = (props) => {
  const [displayReviewModal, setDisplayReviewModal] = useState(
    props.displayReviewModal
  );

  const onClose = () => {
    setDisplayReviewModal(false);
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Col md="auto">
            <Navbar.Brand href="#home">Rentea</Navbar.Brand>
          </Col>
          <Col md="auto">
            <Nav.Link href="#account">Account</Nav.Link>
          </Col>
          <Col lg="auto">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setDisplayReviewModal(true)}
            >
              {SUBMIT_A_REVIEW}
            </Button>
          </Col>
        </Nav>
        <GoogleMapsAddressSearchTextInput
          address={props.address} 
          setAddress={props.setAddress}
        />
      </Navbar>
      {displayReviewModal && <ReviewModal onClose={onClose} />}
    </Container>
  );
};

export default NavigationBar;
