import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import MapContainer from "../googleMaps/MapContainer";
import LandlordInfoCard from "./LandlordInfoCard";
import AddressInfoCard from "./AddressInfoCard";

const RentalPropertyInfoScreen = (props) => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <AddressInfoCard
            address={props.address}
          />
        </Col>
        <Col>
          <LandlordInfoCard
            landlords={props.landlords}
          />
        </Col>
      </Row>
    </Container>
  );
};

RentalPropertyInfoScreen.propTypes = {
  address: PropTypes.object,
  landlords: PropTypes.array
};

RentalPropertyInfoScreen.defaultProps = {
  address: {},
};

export default RentalPropertyInfoScreen;
