import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const RenterInfoCard = (props) => {
  return (
    <Card border={"dark"}>
      <Card.Header>Landlord</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            {Object.entries(props.landlord).length !== 0 && (props.landlord.firstName + " " + props.landlord.lastName)}
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default RenterInfoCard;
