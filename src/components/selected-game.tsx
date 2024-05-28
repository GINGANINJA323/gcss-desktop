import * as React from 'react';
import styled from 'styled-components';

const SelectGameContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

const GameSelect = styled.select`
    border: none;
    border-radius: 5px;
`;

const testGames = [ // TODO: Get data from the repo and use it here
    'Dead Space',
    'Dead Space 2',
    'OpenTTD'
];

const SelectedGame = () => {
    return (
        <SelectGameContainer>
            <GameSelect>
                <option>
                    Select game...
                </option>
                {
                    testGames.map(g => (
                        <option key={g}>{g}</option>
                    ))
                }
            </GameSelect>
        </SelectGameContainer>
    );
}

export default SelectedGame;