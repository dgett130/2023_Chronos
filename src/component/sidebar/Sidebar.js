import {React, useState} from 'react';
import {Nav, Sidenav, Toggle} from "rsuite";

function Sidebar(props) {

    function onSidebarToggle() {
        props.onToggleClick();
    }

   const [activeKey, setActiveKey] = useState('1');

    return (
        <div>
            <Sidenav expanded={props.expanded} defaultOpenKeys={[]}>
                <Sidenav.Toggle expanded={props.expanded} onToggle={onSidebarToggle} />
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item eventKey="1">
                            Dashboard
                        </Nav.Item>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Avanzate" >
                            {/*<Nav.Item eventKey="3-1">Geo</Nav.Item>*/}
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="5" title="Profilo" >
                        </Nav.Menu>
                        <Nav.Menu
                            placement="rightStart"
                            eventKey="4"
                            title="Impostazioni"
                        >
                            <Nav.Item eventKey="4-1">Applicazione</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>

        </div>
    );
}

export default Sidebar;