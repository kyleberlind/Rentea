import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import MapContainer from "../googleMaps/MapContainer";
const AddressInfoCard = (props) => {
  return (
    <Card border={"dark"}>
      <Card.Header>Address</Card.Header>
      <Card.Body>
        {Object.entries(props.address).length > 0 && (
          <Container>
            {props.address.formatted_address}
            <MapContainer />
          </Container>
        )}
      </Card.Body>
    </Card>
  );
};

export default AddressInfoCard;
