import React from 'react';
import {DropdownMenuStyle} from "../Styles/Header.styled";
import DropdownItem from "./DropdownItem";

function DropdownMenu() {
    return (
        <DropdownMenuStyle>
            <DropdownItem link={"/"} name={"Home"}/>
            <DropdownItem link={"/profile"} name={"Profile"}/>
            <DropdownItem link={"/settings"} name={"Settings"}/>
        </DropdownMenuStyle>
    );
}

export default DropdownMenu;