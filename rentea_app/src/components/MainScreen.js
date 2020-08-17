import React from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Card,
  Col,
  Row
} from 'react-bootstrap';
import RentalPropertyInfoScreen from './RentalPropertyInfoScreen'
import AddressSearchTextInput from '../googleMaps/AddressSearchTextInput';

export default class MainScreen extends React.Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">Rentea</Navbar.Brand>
         <Nav className="mr-auto">
          <Nav.Link href="#account">Account</Nav.Link>
           <Button
            variant="primary"
            size="sm">
            Submit a Review
          </Button>
         </Nav>
         <AddressSearchTextInput/>
       </Navbar>
       <RentalPropertyInfoScreen/>
      </Container>
    )
  }
}
