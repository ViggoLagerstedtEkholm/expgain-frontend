import React, {ReactNode} from 'react';
import {SettingsPanel} from "../../Styles/Settings/Settings.styled";

interface Props{
    children: ReactNode;
}

function Panel({children}: Props) {
    return (
        <SettingsPanel>
            {children}
        </SettingsPanel>
    );
}

export default Panel;