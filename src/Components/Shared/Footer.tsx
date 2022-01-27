import React from 'react';
import {Container} from "../Styles/Container.styled";
import {Flex} from "../Styles/Flex.style";
import {StyledFooter} from "../Styles/Footer.styled";
import SocialIcons from "./Socials";
import {LargeText} from "../Styles/Texts.style";

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Flex>
                    <ul>
                        <li>
                            <LargeText>ExpGain</LargeText>
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliquaddss
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@expgain.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons/>
                </Flex>

                <p>&copy; 2022 ExpGain. All rights reserved.</p>
            </Container>
        </StyledFooter>
    );
}

export default Footer;