import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
  <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
           <h2 className='text-light'><FontAwesomeIcon icon={faPlay} beat />   Media Player</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
  </>
  )
}

export default Header