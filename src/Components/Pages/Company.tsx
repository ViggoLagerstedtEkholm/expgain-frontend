import React from 'react';
import {Page} from "../Styles/Container.styled";
import {CompanyHeader} from "../Styles/Company/Company.styled";
import {Text} from '../Styles/Texts.style';
import {Button} from "../Styles/Button.styled";
import {useNavigate} from "react-router-dom";

function Company() {
    const navigate = useNavigate();

    return (
        <Page>
            <Button btnColor="#b475ff" onClick={() => navigate(-1)}>
                Back
            </Button>

            <CompanyHeader>
                ExpGain
            </CompanyHeader>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
            </Text>
            <a href="">www.expgain.com</a>
        </Page>
    );
}

export default Company;