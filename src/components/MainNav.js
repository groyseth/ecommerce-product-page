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

    <Navbar className='mobilePos'>
      <div className='mobileMenu' />




              <Container className='navMain'>



                <Nav className="navHome">
                  <div className='nav'>
                    <Nav.Link
                      href="#landingPage"
                      onClick={() => handlePageChange('landingPage')}

                      className={currentPage === 'landingPage' ? 'nav-link active' : 'nav-link'}
                    >
                       HOME
                    </Nav.Link>
                  </div >



                </Nav>

              </Container>
            
            </Navbar>
            );
}

            export default NavTabs;