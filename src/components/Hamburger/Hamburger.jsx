
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './hamburger.css'

function Hamburger() {

    const menuStyle = {
        color: '#ff5050'
    }

    return (
        <>

            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className='navbar-bg'               
                >
                    <Container fluid>
                        <Navbar.Brand className="navbar-Font" href="#">Davina Dacpano</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            style={menuStyle}
                        >

                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    More
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">About Me</Nav.Link>
                                    <Nav.Link href="#action2">Projects</Nav.Link>
                                    <Nav.Link href="#action3">Skills</Nav.Link>
                                    <Nav.Link href="#action4">Contact Me</Nav.Link>
                          
                                </Nav>                     
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default Hamburger