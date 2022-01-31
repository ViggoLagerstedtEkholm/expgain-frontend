import React, {useContext, useState} from "react";
import {CustomizableFilterHeader, SearchBar} from "../../../Styles/Filter/FilterCustomizable.styled";
import {MediumText} from "../../../Styles/Texts.style";
import {FilterOpenContext} from "../../../../AppContextProvider";
import {Button} from "../../../Styles/Button.styled";

function FilterConfigurationBox() {
    const {filterOpenState, filterOpenDispatch} = useContext(FilterOpenContext);
    const [showFilterBoxState, setShowFilterBoxState] = useState(filterOpenState.isOpened);

    const toggle = () => {
        setShowFilterBoxState(!showFilterBoxState);

        if (showFilterBoxState) {
            filterOpenDispatch({type: 'CLOSE_FILTER'});
        } else {
            filterOpenDispatch({type: 'OPEN_FILTER'});
        }
    }

    return (
        <>
            <Button btnColor="#b475ff" onClick={toggle}>Toggle filtering</Button>
            {showFilterBoxState &&
                <CustomizableFilterHeader>
                    <MediumText>Search</MediumText>
                    <SearchBar type="text"/>
                    
                </CustomizableFilterHeader>
            }
        </>
    );
}

export default FilterConfigurationBox;