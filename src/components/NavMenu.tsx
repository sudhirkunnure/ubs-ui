import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import '../custom.css';


export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
           
            <div className="topnav">
             
                <a className="active" href="/SSL/Home">Home</a>
                <a href="/contacts">Contact</a>
                <a href="/About">About</a>


              </div>

           /* <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                         <a className="active" href="#home">Home</a>
                    <a href="#Sanctions">Sanctions</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                        <Collapse className="d-sm-inline-flex flex-sm-row" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">SSL Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Contact">Contacts</NavLink>
                                </NavItem>


                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/About">About</NavLink>
                                </NavItem>


                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>*/
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
