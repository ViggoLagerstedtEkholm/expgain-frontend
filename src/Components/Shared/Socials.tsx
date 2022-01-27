import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import {StyledSocialIcons} from "../Styles/Socials.styled";

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <a href='https://twitter.com'>
                <FaTwitter />
            </a>
            <a href='https://facebook.com'>
                <FaFacebook />
            </a>
            <a href='https://linkedin.com'>
                <FaLinkedin />
            </a>
        </StyledSocialIcons>
    )
}