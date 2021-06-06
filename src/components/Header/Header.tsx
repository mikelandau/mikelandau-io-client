import React from 'react';
import styled from 'styled-components';

import * as colors from '../../common/colors';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

const Header = styled.header`
height: 72px;
width: 100%;
position: fixed;
top: 0;
left: 0;
background-color: ${colors.coolgray700};
`;

const HeaderContent = styled.div`
height: 72px;
max-width: 1024px;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-sizing: border-box;
z-index: 90;
`;

const header: React.FC = () => {
    return (
        <Header>
            <HeaderContent>
                <Logo />
                <Nav items={[{title:"Home"}, {title:"Articles"}]} />
            </HeaderContent>
        </Header>
    )
}

export default header;