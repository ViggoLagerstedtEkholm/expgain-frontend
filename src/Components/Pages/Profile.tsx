import React from 'react';
import {MediumText, Text} from "../Styles/Texts.style";
import {Page} from "../Styles/Container.styled";
import {HandlesBox, ProfileHeaderCard, ProfileImage} from "../Styles/Profile/Profile.styled";
import SocialIcons from "../Shared/Socials";

function Profile() {
    return (
        <Page>
            <ProfileHeaderCard>
                <ProfileImage src="https://avatars.githubusercontent.com/u/60555651?v=4" width={150} height={550}/>
                <MediumText>Viggo Lagerstedt Ekholm</MediumText>
                <HandlesBox><SocialIcons/></HandlesBox>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </Text>
            </ProfileHeaderCard>

        </Page>
    );
}

export default Profile;