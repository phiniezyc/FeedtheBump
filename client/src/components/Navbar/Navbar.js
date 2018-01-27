import React from 'react';
import { Navbar, NavItem } from 'react-materialize';


const NavBar = () => (
    <div>
        <Navbar className="baseColor" brand="Feed the Bump" right>
<<<<<<< HEAD
            <NavItem href="/user/about">About</NavItem>
            <NavItem href="/user/settings">Settings</NavItem>
            <NavItem href="/user/nutritionReport">Nutrition Report</NavItem>
            <NavItem href="/article">Health Article</NavItem>
=======
            <NavItem href="/">About</NavItem>
            <NavItem href="/user/settings">Settings</NavItem>
>>>>>>> 295dfa054b68e4f35b2fab16959c04dd913c93bb
        </Navbar>
    </div>
);

export default NavBar;

// Above Code: added the Nutrition Report
// and the Health Article into the navbar