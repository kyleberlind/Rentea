import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import MapContainer from "../googleMaps/MapContainer";
import RenterInfoCard from "./RenterInfoCard";
import ApartmentInfoCard from "./ApartmentInfoCard";

const RentalPropertyInfoScreen = (props) => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col>
          <ApartmentInfoCard />
        </Col>
        <Col>
          <RenterInfoCard />
        </Col>
      </Row>
    </Container>
  );
};

RentalPropertyInfoScreen.propTypes = {
  Address: PropTypes.string,
};

RentalPropertyInfoScreen.defaultProps = {
  Address: "",
};

export default RentalPropertyInfoScreen;
