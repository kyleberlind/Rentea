import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import RentalPropertyInfoScreen from "./RentalPropertyInfoScreen";
import AddressSearchTextInput from "../googleMaps/AddressSearchTextInput";
import ReviewModal from "./ReviewModal";

const MainScreen = (props) => {
  const [displayReviewModal, setDisplayReviewModal] = useState(
    props.displayReviewModal
  );

  const onClose = () => {
    setDisplayReviewModal(false)
  }

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Row noGutters>
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
                  Submit a Review
                </Button>
              </Col>
            </Nav>
          </Row>
        </Container>
        <AddressSearchTextInput />
      </Navbar>
      {displayReviewModal ? <ReviewModal onClose={onClose} /> : <RentalPropertyInfoScreen />}
    </Container>
  );
};

MainScreen.propTypes = {
  displayReviewModal: PropTypes.bool,
};

MainScreen.defaultProps = {
  displayReviewModal: false,
};

export default MainScreen;
