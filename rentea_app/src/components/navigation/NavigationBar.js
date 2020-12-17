import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
import { SUBMIT_A_REVIEW } from "../review/ReviewConstants";
import ReviewModal from "../review/ReviewModal";
import GoogleMapsAddressSearchTextInput from "../../googleMaps/GoogleMapsAddressSearchTextInput";
import { getLandlordByAddress } from "../../services";

const NavigationBar = (props) => {
  const handleSearchAddress = () => {
    getLandlordByAddress(props.address.formatted_address).then((response) => {
      response
        .json()
        .then((data) => {
          if (data["landlordData"] != null) {
            props.setLandlords(data["landlordData"]);
          } else {
            console.log("No Address Found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Col md="auto">
            <Navbar.Brand href="#home">Rentea</Navbar.Brand>
          </Col>
          <Col lg="auto">
            <Button
              variant="primary"
              size="sm"
              onClick={() => props.setDisplayReviewModal(true)}
            >
              {SUBMIT_A_REVIEW}
            </Button>
          </Col>
        </Nav>
        <Button onClick={handleSearchAddress}>Search Address</Button>
        <GoogleMapsAddressSearchTextInput
          address={props.address}
          setAddress={props.setAddress}
        />
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
