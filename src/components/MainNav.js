import React, { useState } from 'react';
import "../styles/nav.scss"
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavTabs({ currentPage, handlePageChange }) {
  // const [menu, setMenu] = useState(false)
  // const handleMenu = () => {
  //   setMenu(true);
  // }
  // const closeMenu = () => {
  //   setMenu(false);
  // }


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#landingPage"
          onClick={() => handlePageChange('landingPage')} className={currentPage === 'landingPage' ? 'nav-link active' : 'nav-link'}>Space X</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#collections"
            onClick={() => handlePageChange('Collections')} className={currentPage === 'Collections' ? 'nav-link active' : 'nav-link'}>Collections</Nav.Link>

          <Nav.Link href="#ships"
            onClick={() => handlePageChange('Ships')} className={currentPage === 'Ships' ? 'nav-link active' : 'nav-link'}>Ships</Nav.Link>

          <Nav.Link href="#Travel"
            onClick={() => handlePageChange('Travel')} className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'}>Travel</Nav.Link>

          <Nav.Link href="#About"
            onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>

          <Nav.Link href="#Contact"
            onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>

        </Nav>
      </Container>
    </Navbar>

  );
}

export default NavTabs;