import React, { Component } from 'react'
import bb from '../images/bonestraight.jpg'
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container

} from 'reactstrap'

export class Appnavbar extends Component {
    state={
    isOpen : false
    }

    toggle = () =>{
        this.setState({isOpen :!this.state.isOpen})
    }
    render() {
        return (
            <div>
                <Navbar navbar fixed-top navbar-expand-md color='dark' dark  expand="sm" className="mb-5">
                    <Container>
                   <NavbarBrand text-color="danger">ENA'S HAIR    
                   <img src={bb} className="flex" width="50px"></img>
                   </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="/" color='yellow' > email:pfedrick683@gmail.</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="/" > contact: 08094809021</NavLink>
                          </NavItem> <NavItem>
                              <NavLink href="/" > instagram: EnaHair.524</NavLink>
                          </NavItem>
                        </Nav>
                    </Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }
}

export default Appnavbar


