import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/'><Navbar.Brand>Covid-19</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to='/india' className='nav-link'>India</Link>
                        <Link to='/world' className='nav-link'>World</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header