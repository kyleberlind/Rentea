import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ReviewCard = (props) => {
  return (
    <Card border={"dark"}>
      <Card.Header>{props.landlord.firstName + " " + props.landlord.lastName}</Card.Header>
      <Card.Body>
        <Container>
          <Row>{props.landlord.email}</Row>
          <Row>{props.landlord.review}</Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
