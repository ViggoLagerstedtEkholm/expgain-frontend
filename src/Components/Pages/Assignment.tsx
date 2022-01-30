import React from 'react';
import {
    AssignmentInfo,
    AssignmentLayout, AssignmentLocation, AssignmentText, Badge,
    CompanyInfo, CompanyLocation,
} from "../Styles/Assignment/Assignment.styled";
import {Date, LargeText, MediumText, Text} from "../Styles/Texts.style";
import {Page} from "../Styles/Container.styled";
import {Button} from "../Styles/Button.styled";
import {useNavigate} from "react-router-dom";

function Assignment() {
    const navigate = useNavigate();

    return (
        <Page>
            <AssignmentLayout>
                <AssignmentInfo>
                    <Badge>Paid</Badge>
                    <AssignmentText>
                        <MediumText>Assignment name...</MediumText>
                        <AssignmentLocation>Stockholm, Sweden. </AssignmentLocation>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </Text>
                        <Date>Project scope: 2022-2023</Date>
                        <Button>Apply</Button>
                    </AssignmentText>
                </AssignmentInfo>

                <CompanyInfo>
                    <LargeText>ExpGain</LargeText>
                    <CompanyLocation>Stockholm, Sweden.</CompanyLocation>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                    <Button onClick={() => navigate('/company/ExpGain')}>Visit company profile</Button>
                </CompanyInfo>
            </AssignmentLayout>
        </Page>
    );
}

export default Assignment;