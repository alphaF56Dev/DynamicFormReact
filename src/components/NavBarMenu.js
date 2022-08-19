import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';

export default function NavBarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand href='#home'>Dynamic form</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>
                    Sign in as: <a href="#login">Alex Fierro</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
