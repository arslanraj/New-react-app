import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Header() {
  return (
    
    <Navbar expand="lg" className="bg-dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">Arslan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto"  style={{paddingLeft:"20rem"}}>
            <Nav.Link><Link to={'/'} style={{textDecoration:"none" , color:"white"}} > Home</Link></Nav.Link>
            <Nav.Link ><Link to={'/projects'} style={{textDecoration:"none" , color:"white"}} > Projects</Link></Nav.Link>
            <Link to={'/reviews'} style={{textDecoration:"none" , color:"white"}} > 
            <NavDropdown  title="Reviews" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Seller Reviews
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Buyer Reviews
              </NavDropdown.Item>
              </NavDropdown>
              </Link>
              <Nav.Link ><Link to={'/products'} style={{textDecoration:"none" , color:"white"}} > Products</Link></Nav.Link>
               <Nav.Link href="#link"><Link to={'/contact'} style={{textDecoration:"none" , color:"white"}} > Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
   
  )
}

export default Header
