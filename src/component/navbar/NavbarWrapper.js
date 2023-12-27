import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { IconName } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

function NavbarWrapper() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#">CHRONOS</Navbar.Brand>
                <Nav>
                    <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                    <Nav.Menu title="About">
                        <Nav.Item>Company</Nav.Item>
                    </Nav.Menu>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
                    <Nav.Item icon={<IoLogOut />}>Logout</Nav.Item>
                </Nav>
            </Navbar>
        </div>

    );
}

export default NavbarWrapper;