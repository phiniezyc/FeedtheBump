import React from 'react';
import { Navbar, NavItem } from 'react-materialize';


const NavBar = () => (
    <div>
        <Navbar className="baseColor" brand="Feed the Bump" right>
            <NavItem href="/">About</NavItem>
            <NavItem href="/">Settings</NavItem>
            <NavItem href="/">Nutrition Report</NavItem>
            <NavItem href="/">Health Article</NavItem>
        </Navbar>
    </div>
);

export default NavBar;

// Above Code: added the Nutrition Report
// and the Health Article into the navbar