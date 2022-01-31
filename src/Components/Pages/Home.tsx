import React from 'react';
import {Flex} from "../Styles/Flex.style";
import {LargeText, MediumText, Text} from "../Styles/Texts.style";
import {Button} from "../Styles/Button.styled";
import content from "../content";
import Card from "../Shared/Card";
import {Page} from "../Styles/Container.styled";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Page>
            <Flex>
                <div>
                    <LargeText>Opportunities for anybody or anyone.</LargeText>
                    <Text>Find your next opportunity, start today!</Text>
                    <MediumText>
                        Join today to offer your skill-set and gain experience using ExpGain.
                    </MediumText>

                    <div>
                        <Button btnColor="#b475ff" onClick={() => navigate('/search')}>
                            Find available postings.
                        </Button>
                    </div>

                    <div>
                        <Button btnColor="#4287f5" onClick={() => navigate('/leaderboard')}>
                            Go to leaderboard.
                        </Button>
                    </div>

                    <div>
                        <Button btnColor="#286900" onClick={() => navigate('/certification')}>
                            Certifications.
                        </Button>
                    </div>
                </div>
            </Flex>

            {content.map((item, index) =>(
                <Card key={index} item={item}/>
            ))}
        </Page>
    );
}

export default Home;