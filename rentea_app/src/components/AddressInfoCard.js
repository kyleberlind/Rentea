import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const AddressInfoCard = (props) => {
  return (
    <Card border={"dark"}>
      <Card.Header>Address</Card.Header>
      <Card.Body>
      {props.address.first_name}
      </Card.Body>
    </Card>
  );
};

export default AddressInfoCard;
