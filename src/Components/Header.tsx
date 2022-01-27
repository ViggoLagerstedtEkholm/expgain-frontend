import React from "react";
import {AuthBox, HeaderStyled, IconStyle, Logo, Nav} from "./Styles/Header.styled";
import {Container} from "./Styles/Container.styled";
import {Button} from "./Styles/Button.styled";

export default function Header(){
    return(
        <HeaderStyled>
            <Container>
                <Nav>
                    <Logo>ExpGain</Logo>
                    <AuthBox>
                        <Button>Try It For Free</Button>
                        <IconStyle src={`https://avatars.githubusercontent.com/u/60555651?v=4`} width={40} height={40}/>
                    </AuthBox>
                </Nav>
            </Container>
        </HeaderStyled>
    )
}