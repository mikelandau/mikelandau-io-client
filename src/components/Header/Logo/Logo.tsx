import React from 'react';
import styled from 'styled-components';

import * as colors from '../../../common/colors';

const Logo = styled.div`
    color: white;
    font-size: 32pt;
    font-family: 'Raleway', sans-serif;
`;

const logo = () => {
    return (
        <Logo>
            MIKE LANDAU
        </Logo>
    )
}

export default logo;