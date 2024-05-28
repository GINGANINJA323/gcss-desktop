import * as React from 'react';
import LandingPage from './pages/landing';
import styled from 'styled-components';
import Navbar from './components/navbar';
import SaveManager from './save-manager/save-manager';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;



const App = (): JSX.Element => {
    const SaveManagerContext = React.createContext<SaveManager | null>(null);
    const [userSettings, setUserSettings] = React.useState(new SaveManager());

    return (
        <SaveManagerContext.Provider value={userSettings}>
            <MainContainer>
                <Navbar />
                <LandingPage />
            </MainContainer>
        </SaveManagerContext.Provider>
    );
}

export default App;