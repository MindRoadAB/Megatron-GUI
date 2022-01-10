import{Nav, NavLink, NavMenu} from './NavbarElements'


export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>Megatron</h1>
                </NavLink>
                <NavMenu>
                    <NavLink NavLink to='/organizations'>
                        Organizations
                    </NavLink>
                    <NavLink to='/contacts'> 
                        Contacts
                    </NavLink>
                    <NavLink to='/log-entries'> 
                        Log Entries
                    </NavLink>
                    <NavLink to='/something'>
                        Something
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
