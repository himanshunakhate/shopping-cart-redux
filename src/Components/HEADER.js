import React from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HEADER = () => {
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style ={{width: 500}} placeholder="Search" className='m-auto' />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge bg='green'>10</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth: 370}}>
                        <span style={{padding :10}}> Card is Empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
    
  )
}

export default HEADER
