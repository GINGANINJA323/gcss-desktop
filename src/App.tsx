import * as React from 'react';
import {LandingPage, StartupPage} from './pages';
import styled from 'styled-components';
import Navbar from './components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from './store/types';
import { getSettingsFromFile } from './store/userSlice';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading = useSelector((state: StateType) => state.base.loading);
    const firstStartup = useSelector((state: StateType) => state.user.firstStartup);

    React.useEffect(() => {
        // Call to init the program
        // @ts-ignore - some type issue with AsyncThunks, fix later
        dispatch(getSettingsFromFile());
    })

    if (firstStartup) {
        // TODO: pre-boarding, get user details and write them back
    }

    return (
        <MainContainer>
            <Navbar />
            <LandingPage />
        </MainContainer>
    );
}

export default App;