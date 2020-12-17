import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ReviewCard from "./review/ReviewCard";
import PropTypes from "prop-types";

const RenterInfoCard = (props) => {
  const loadLandLordCards = () => {
    return props.landlords.map((landlord, index) => {
      return (
        //this is apparently an anti pattern that we should fix
        <ReviewCard key={index} landlord={landlord}></ReviewCard>
      );
    });
  };
  return (
    <Card border={"dark"}>
      <Card.Header>Landlord Reviews</Card.Header>
      <Card.Body>
        {props.landlords.length > 0 ? loadLandLordCards() : null}
      </Card.Body>
    </Card>
  );
};

export default RenterInfoCard;
