import{Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export const NavComponent= () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>
                <Navbar.Brand className='m-2'>
                    Megatron
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/organizations'}>Organizations</Nav.Link>
                    <Nav.Link as={Link} to={'/organization/1'}>Organization 1</Nav.Link>
                    <Nav.Link as={Link} to={'/contacts'}>Contacts</Nav.Link>
                    <Nav.Link as={Link} to={'/something'}>Somthing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}