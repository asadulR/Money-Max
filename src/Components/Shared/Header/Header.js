import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Auth/Firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" className='py-3' variant="light">
                <Container>
                    <Navbar.Brand as={Link} className='fw-bold text-primary' to="/">Money Max</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/">HOME</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blog">BLOG</Nav.Link>
                            <NavDropdown title="JOB PAGES" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={CustomLink} to="/job">JOBS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav>
                           { 
                           user ? 
                           <Nav.Link onClick={handleSignout} >
                                Logout
                            </Nav.Link>
                           :<Nav.Link as={CustomLink} to="/login">
                                LOGIN
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;