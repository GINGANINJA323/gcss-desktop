import * as React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const LandingPage = () => {
    return (
        <LandingContainer>
            <h1>Welcome to the GCSS</h1>
            <p>To get started, press 'Select Game...' at the top of the window.</p>
        </LandingContainer>
    );
}

export default LandingPage;