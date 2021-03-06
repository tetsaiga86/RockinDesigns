import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,

} from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <div className="header-div">
        <Navbar inverse collapseOnSelect>
		      <Navbar.Header>
			      <Navbar.Brand>
				      <a href="/">Rockin Designs</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
		      </Navbar.Header>
		      <Navbar.Collapse>
			      <Nav pullRight>
  				    <NavItem eventKey={1} href="/about">
  					    About
  				    </NavItem>
  				    <NavItem eventKey={2} href="/portfolio">
  					    Portfolio
      				</NavItem>
              <NavItem eventKey={3} href="/services">
  					    Services
      				</NavItem>
              <NavItem eventKey={4} href="/resume">
  					    Resume
      				</NavItem>
      				<NavDropdown eventKey={5} title="Contact" id="basic-nav-dropdown">
      					<MenuItem eventKey={5.1}>e-mail</MenuItem>
      					<MenuItem eventKey={5.2}>phone</MenuItem>
      					<MenuItem eventKey={5.3}>Carrier pidgeon</MenuItem>
      					<MenuItem divider />
      					<MenuItem eventKey={5.4}>Separated link</MenuItem>
      				</NavDropdown>
      			</Nav>
      		</Navbar.Collapse>
      	</Navbar>
      </div>
    )
  }
}

export default Header
