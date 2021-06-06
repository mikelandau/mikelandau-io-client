import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';


const nav: React.FC<{ items: { title: string }[] }> = (props) => {
    const Nav = styled.nav`
        display:flex;
    `;

    const navItems = props.items.map((navItem) => <NavItem title={navItem.title} />)

    return (
        <Nav>
            {navItems}
        </Nav>
    )
}

export default nav;