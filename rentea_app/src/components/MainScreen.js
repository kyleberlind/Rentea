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
import AddressSearchTextInput from "./AddressSearchTextInput";
import ReviewModal from "./review/ReviewModal";
import NavigationBar from "./navigation/NavigationBar";
import { SUBMIT_A_REVIEW } from "./review/ReviewConstants";

const MainScreen = (props) => {
  const [address, setAddress] = useState({});
  const [landlord, setLandlord] = useState({});

  return (
    <Container fluid>
      <NavigationBar address={address} setAddress={setAddress} />
      <RentalPropertyInfoScreen
        address={address}
        landlord={landlord}
        setLandlord={setLandlord}
      />
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
