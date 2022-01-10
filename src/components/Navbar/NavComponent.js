import{Navbar, Nav} from 'react-bootstrap'


export const NavComponent= () => {
    return (
        <div>
            <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>
                <Navbar.Brand className='m-2'>
                    Megatron
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="organizations">Organizations</Nav.Link>
                    <Nav.Link href="contacts">Contacts</Nav.Link>
                    <Nav.Link href="something">Somthing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}