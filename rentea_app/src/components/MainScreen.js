import React from 'react';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Card
} from 'react-bootstrap';

export default class MainScreen extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">Rentea</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="#home"></Nav.Link>
           <Nav.Link href="#account">Account</Nav.Link>
         </Nav>
         <Form inline>
           <FormControl type="text" placeholder="Search for Address" className="mr-sm-2" />
           <Button variant="outline-info">Search</Button>
         </Form>
       </Navbar>
      </Container>
      )
  }
}
