import {Button, Container, Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';
import Logo from '../../assets/Image/Logo.png';
import style from './style.module.css';


function Header() {
    return(
        <div className={style.header} >
        <Navbar bgColor="#C7E9B0" variant="dark">
        <Container>
            <Button variant="contained">
            <img style={{ width: 100, height: 50 }} src={Logo} href="Home" class="center"alt="" />
            </Button>
          <Nav className="me-auto">
                <NavDropdown title="Hewan Peliharaan" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Kucing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Anjing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Reptil</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Burung</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Ikan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Hamster</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Hewan Lainnya</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Perawatan Anjing" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Makanan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mainan </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pakaian</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Tempat Tidur</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Lainnya</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Perawatan Kucing" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Makanan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mainan </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Pakaian</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Tempat Tidur</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Lainnya</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Perawatan Reptil" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Makanan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mainan </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Tempat Tidur</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Lainnya</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="About">About Us</Nav.Link>
          </Nav>
          
          <form>
        <Form.Control type="search" placeholder="Search" />
          </form>

            <Button href="#" variant="success">Login</Button>
        </Container>
        </Navbar>
        </div>
    )
}
export default Header;