import React, {Dispatch, SetStateAction} from 'react';
import {SelectMenu, SelectMenuItem} from "../Styles/Settings/Settings.styled";

interface Props{
    setPage: Dispatch<SetStateAction<number>>
}

function SettingsMenu({setPage}: Props) {
    return (
        <SelectMenu>
            <SelectMenuItem onClick={() => setPage(0)}><p>Account</p></SelectMenuItem>
            <SelectMenuItem onClick={() => setPage(1)}><p>Handles</p></SelectMenuItem>
            <SelectMenuItem onClick={() => setPage(2)}><p>CV</p></SelectMenuItem>
            <SelectMenuItem onClick={() => setPage(3)}><p>History</p></SelectMenuItem>
        </SelectMenu>
    );
}

export default SettingsMenu;