import * as React from 'react';
import styled from 'styled-components';
import SelectedGame from './selected-game';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <SelectedGame />
        </NavbarContainer>
    );
}

export default Navbar;