import React, {useContext, useState} from "react";
import {AuthBox, HeaderStyled, IconStyle, Logo, Nav} from "../Styles/Header.styled";
import {Container} from "../Styles/Container.styled";
import {LogoLinkStyle} from "../Styles/LogoLinkStyle";
import {ThemeContext} from "../../AppContextProvider";

import {FaMoon, FaSun} from "react-icons/fa";
import {ThemeButtonStyled} from "../Styles/ThemeButton.styled";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
    const {dark, toggleDark} = useContext(ThemeContext);
    const [dropdownOpened, setDropdownOpened] = useState(false);

    return (
        <HeaderStyled>
            <Container>
                <Nav>
                    <LogoLinkStyle to={"/"}><Logo>ExpGain</Logo></LogoLinkStyle>
                    <AuthBox>
                        <ThemeButtonStyled onClick={toggleDark}>{dark ? <FaSun/> : <FaMoon/>}</ThemeButtonStyled>
                        <IconStyle src={`https://avatars.githubusercontent.com/u/60555651?v=4`} width={40} height={40}
                                   onClick={() => setDropdownOpened(!dropdownOpened)}/>
                        {dropdownOpened && <DropdownMenu/>}
                    </AuthBox>
                </Nav>
            </Container>
        </HeaderStyled>
    )
}