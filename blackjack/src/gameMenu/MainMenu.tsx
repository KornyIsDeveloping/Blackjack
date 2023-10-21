import React from 'react'
import Stack from '@mui/material/Stack';
import PlayButton from './PlayButton'
import RulesButton from './RulesButton'
import AboutButton from './AboutButton'


const MainMenu: React.FC = () => {
    
    return (
        <Stack direction="column" spacing={2} className="menu">
            <PlayButton />
            <RulesButton />
            <AboutButton />
        </Stack>
    ) 
}

export default MainMenu;