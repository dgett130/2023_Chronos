import {React, useState} from 'react';
import {Nav, Sidenav, Toggle} from "rsuite";

function Sidebar(props) {

   const [expanded, setExpanded] = useState(true);
   const [activeKey, setActiveKey] = useState('1');

    return (
        <div>
            <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
                <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1">
                            Dashboard
                        </Nav.Item>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" >
                            <Nav.Item eventKey="3-1">Geo</Nav.Item>
                            <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Settings"
                        >
                            <Nav.Item eventKey="4-1">Applications</Nav.Item>
                            <Nav.Item eventKey="4-2">Channels</Nav.Item>
                            <Nav.Item eventKey="4-3">Versions</Nav.Item>
                            <Nav.Menu eventKey="4-5" title="Custom Action">
                                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                            </Nav.Menu>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>

        </div>
    );
}

export default Sidebar;