import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo1-removebg.png';
import './NavBar.css'
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <Navbar expand="lg" className="NavBar navbar-dark">
            <Container >
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav bg-success" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-list'>
                    <Nav className="nav-list">
                        <Nav.Link as={Link} to="/" className='Navlink'>Home</Nav.Link>
                        <Nav.Link as={Link} to="categoria/mothers" className='Navlink'>Mother</Nav.Link>
                        <Nav.Link as={Link} to="categoria/RAM" className='Navlink'>RAM</Nav.Link>
                        <Nav.Link as={Link} to="categoria/procesador" className='Navlink'>Procesadores</Nav.Link>
                        <Nav.Link as={Link} to="categoria/almacenamiento" className='Navlink'>Almacenamiento</Nav.Link>
                        <Nav.Link as={Link} to="categoria/gabinete" className='Navlink'>Gabinetes</Nav.Link>
                        <Nav.Link as={Link} to="*"><CartWidget/></Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}

export default NavBar;