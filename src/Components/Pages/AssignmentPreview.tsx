import React from 'react';
import {Posting} from "../Styles/Filter/FilterBox.styled";
import {LargeText, MediumText, Text} from "../Styles/Texts.style";
import {Button} from "../Styles/Button.styled";
import {useNavigate} from "react-router-dom";

function AssignmentPreview() {
    const navigate = useNavigate();

    return (
        <Posting>
            <LargeText>Example.</LargeText>
            <MediumText>Company X</MediumText>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</Text>

            <Text>
                Pay - With agreement.
            </Text>

            <Text>
                Date - 2022-2023 (1 year)
            </Text>

            <Button onClick={() => navigate("/assignment/5")}>More</Button>
        </Posting>
    );
}

export default AssignmentPreview;