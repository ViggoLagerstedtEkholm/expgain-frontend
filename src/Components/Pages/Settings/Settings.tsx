import React, {ReactNode, useEffect, useState} from 'react';
import {Page} from "../../Styles/Container.styled";
import {LargeText} from "../../Styles/Texts.style";
import {SettingsLayout} from "../../Styles/Settings/Settings.styled";
import SettingsMenu from "../../Shared/SettingsMenu";
import Panel from "./Panel";
import Account from "./Account";
import Handles from "./Handles";
import CV from "./CV";
import History from "./History";

function Settings() {
    const [pageIndex, setPageIndex] = useState(0);
    const [page, setPage] = useState<ReactNode>(<Account/>);

    useEffect(() => {
        switch (pageIndex){
            case 0: setPage(<Account/>);
                break;
            case 1: setPage(<Handles/>);
                break;
            case 2: setPage(<CV/>);
                break;
            case 3: setPage(<History/>);
                break;
        }
    }, [pageIndex])

    return (
        <Page>
            <LargeText>Settings</LargeText>
            <SettingsLayout>
                <SettingsMenu setPage={setPageIndex}/>
                <Panel children={page}/>
            </SettingsLayout>
        </Page>
    );
}

export default Settings;