import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mentor Mahesh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><a href="https://www.toonland.in/" target="_blank" rel="noopener noreferrer">toonland</a> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               <a href="https://www.cxobranding.com/" target="_blank" rel="noopener noreferrer"> CXO Branding</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><a href="https://mentoons.com/" target="_blank" rel="noopener noreferrer">Mentoons</a></NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;