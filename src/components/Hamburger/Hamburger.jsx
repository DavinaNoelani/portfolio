
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import linked from '../../assets/linkedIn1Coral.png';
import gitPeri from '../../assets/githubCoralBlack.png';
import './hamburger.css';

function Hamburger() {

    const menuStyle = {
        color: '#ff5050'
    }

    const iconStyle = {
        width: '35px',
        height: '35px',
        borderRadius: '10px',
        
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
                        <Navbar.Brand className="navbar-Font" href="/">Davina Noelani</Navbar.Brand>

                        <div className='social-container'>
                            <a href='https://www.linkedin.com/in/davina-dacpano/' className='icon-anchor'>
                                <img alt='linkedIn' src={linked} style={iconStyle} className='socialMedia' />
                            </a>

                            <a href='https://github.com/DavinaNoelani' className='icon-anchor'>
                                <img alt='GitHub' src={gitPeri} style={iconStyle} className='git socialMedia' />
                            </a>
                        </div>


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
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href="/skills">Skills</Nav.Link>
                                    <Nav.Link href="/projects">Projects</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                </Nav>


                                <div className='icon-container'>

                                </div>
                            </Offcanvas.Body>

                        </Navbar.Offcanvas>

                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default Hamburger