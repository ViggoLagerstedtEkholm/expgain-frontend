import React from 'react';
import {ScrollItemStyle} from "../Styles/Header.styled";
import {useNavigate} from "react-router-dom";
import {Text} from '../Styles/Texts.style';

interface Props{
    link: string;
    name: string;
}

function DropdownItem(link: Props) {
    const navigate = useNavigate();

    return (
        <ScrollItemStyle onClick={() => navigate(link.link)}>
            <Text>{link.name}</Text>
        </ScrollItemStyle>
    );
}

export default DropdownItem;