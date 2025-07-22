import React from 'react'
import {BrowserRouter, Routes,Route, NavLink } from 'react-router-dom'
import Home from './Home'
import ContactUs from './ContactUs'
import Services from './Services'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Main = () => {
  return (
    <>
    
    <h4>Welcome to Main page</h4>

    <BrowserRouter>

        <Routes>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/contact' element={<ContactUs/>}/>
            <Route exact path='/services' element={<Services/>}/>
        </Routes> 
     
     </BrowserRouter>
    

      {/* <ul> */}

            {/* <li><a href='/home'>Home</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/services'>Services</a></li> */}
           

            {/* <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li> */}
      {/* </ul> */}

         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  )
}

export default Main