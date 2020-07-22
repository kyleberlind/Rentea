import React from 'react';

class MainScreen extends React.Component {
  <Container>
      <Navbar bg="dark" variant="dark">
       <Navbar.Brand href="#home">Rentea</Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link href="#home"></Nav.Link>
         <Nav.Link href="#features">Features</Nav.Link>
         <Nav.Link href="#pricing">Pricing</Nav.Link>
       </Nav>
       <Form inline>
         <FormControl type="text" placeholder="Search for Adress" className="mr-sm-2" />
         <Button variant="outline-info">Search</Button>
       </Form>
     </Navbar>
  </Container>

}
