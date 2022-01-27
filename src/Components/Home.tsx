import React from 'react';
import {Flex} from "./Styles/Flex.style";
import {LargeText, MediumText, Text} from "./Styles/Texts.style";
import {Button} from "./Styles/Button.styled";
import content from "./content";
import Card from "./Card";

function Home() {
    return (
        <>
            <Flex>
                <div>
                    <LargeText>Opportunities for anybody or anyone.</LargeText>
                    <Text>Find your next opportunity, start today!</Text>
                    <MediumText>
                        Join today to offer your skill-set and gain experience using ExpGain.
                    </MediumText>
                    <Button>
                        Find available postings.
                    </Button>
                </div>
            </Flex>

            {content.map((item, index) =>(
                <Card key={index} item={item}/>
            ))}
        </>
    );
}

export default Home;