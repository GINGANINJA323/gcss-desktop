import * as React from 'react';
import styled from 'styled-components';

const StartupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Startup = () => {
    return (
        <StartupContainer>
            <h1>GCSS is starting</h1>
            <p>Hang tight...</p>
        </StartupContainer>
    );
}

export default Startup;