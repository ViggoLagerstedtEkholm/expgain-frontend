import React, {ReactNode, useEffect} from 'react';
import {useFilterContext} from "../../State/FilterProvider";
import axios from "axios";
import FilterConfigurationBox from "./FilterConfigurationBox";
import {FilterBoxStyled} from "../../../Styles/Filter/FilterBox.styled";
import Pagination from "../Pagination/Pagination";

interface Props{
    children: ReactNode;
}

function FilterBox(props: Props) {
    const {
        selectedOption,
        search,
        page,
        order,
        api,
        setResult,
        applyResultCount,
        setPagination
    } = useFilterContext();

    useEffect(() => {
        const query = async () => {
            return await axios.post(api, {
                Page: page,
                Order: order,
                Search: search,
                Option: selectedOption
            });
        }

        query().then(response => {
            setResult(response.data, search);
            applyResultCount(response.data.totalMatches);
            setPagination(response.data.pagination);
        }).catch(error => console.log(error));
    }, [page, selectedOption, search, order])

    return (
        <>
            <FilterConfigurationBox/>
            <FilterBoxStyled>
                {props.children}
            </FilterBoxStyled>
            <Pagination/>
        </>
    );
}

export default FilterBox;