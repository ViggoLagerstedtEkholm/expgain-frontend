import React, {useContext} from "react";
import {AuthBox, HeaderStyled, IconStyle, Logo, Nav} from "../Styles/Header.styled";
import {Container} from "../Styles/Container.styled";
import {LinkStyled} from "../Styles/Link.styled";
import {ThemeContext} from "../../AppContextProvider";

import { FaMoon, FaSun } from "react-icons/fa";
import {ThemeButtonStyled} from "../Styles/ThemeButton.styled";

export default function Header(){
    const {dark, toggleDark} = useContext(ThemeContext);

    return(
        <HeaderStyled>
            <Container>
                <Nav>
                    <LinkStyled to={"/"}><Logo>ExpGain</Logo></LinkStyled>
                    <AuthBox>
                        <ThemeButtonStyled onClick={toggleDark}>{dark ? <FaSun/> : <FaMoon/>}</ThemeButtonStyled>
                        <LinkStyled to={"/profile"}><IconStyle src={`https://avatars.githubusercontent.com/u/60555651?v=4`} width={40} height={40}/></LinkStyled>
                    </AuthBox>
                </Nav>
            </Container>
        </HeaderStyled>
    )
}