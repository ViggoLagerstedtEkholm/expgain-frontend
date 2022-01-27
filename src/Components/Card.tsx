import React from 'react';
import {CardStyled} from "./Styles/Card.styled";
import {Flex} from "./Styles/Flex.style";

interface Item{
    id: number;
    title: string;
    body: string;
}

interface Props{
    item: Item,
}

function Card({item}: Props) {
    return (
        <CardStyled>
            <Flex>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>

                <div>

                </div>
            </Flex>
        </CardStyled>
    );
}

export default Card;
