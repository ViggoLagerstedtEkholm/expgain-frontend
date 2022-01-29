import React from 'react';
import {Page} from "../Styles/Container.styled";
import {FilterProvider} from "../Shared/State/FilterProvider";
import FilterBox from "../Shared/Filter/Main/FilterBox";
import AssignmentPreview from "./AssignmentPreview";
import {Filter, OptionsMap, Order} from "../Hooks/useFilter";

function Search() {
    const options: OptionsMap = {
        Name: 'Name',
        Credits: 'Credits',
        Added: 'Added',
        Country: 'Country',
        City: 'City',
        University: 'University',
        Code: 'Code',
        Link: 'Link',
        Rating: 'Rating'
    };

    const filter: Filter<any> = {
        Page: 1,
        Search: "",
        Order: Order.Descending,
        Options: options,
        ShowFilter: true,
        SelectedOption: options.Name,
        APIEndpoint: 'https://localhost:5001/api/Search/courses',
        Result: onResults
    }

    function onResults(results: any | null, search: string) {
        console.log("Result!");
    }

    return (
        <Page>
            <FilterProvider startFilter={filter}>
                <FilterBox>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                    <AssignmentPreview/>
                </FilterBox>
            </FilterProvider>
        </Page>
    );
}

export default Search;