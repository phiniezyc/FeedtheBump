import React from 'react';
import { Navbar, NavItem } from 'react-materialize';


const NavBar = () => (
    <div>
        <Navbar className="baseColor" brand="Feed the Bump" right>
            <NavItem href="/">About</NavItem>
            <NavItem href="/user/settings">Settings</NavItem>
        </Navbar>
    </div>
);

export default NavBar;