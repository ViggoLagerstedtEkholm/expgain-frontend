import React from 'react';
import {PaginationButton, PaginationStyled} from "../../../Styles/Filter/Pagination.styled";
import {useFilterContext} from "../../State/FilterProvider";
import {MediumText} from "../../../Styles/Texts.style";

function Pagination() {
    const {page, incrementPage, decrementPage, goToPage, pagination} = useFilterContext();


    //Working logic.
    /*
       {page > 1 &&
            <div>
                <PaginationButton onClick={decrementPage}> 🡸 </PaginationButton>
            </div>
        }

        {pagination && page <= pagination?.totalPages - 1 &&
            <div>
                <PaginationButton onClick={incrementPage}> 🡺 </PaginationButton>
            </div>
        }
     */


    return (
        <>
            <MediumText>{page} / {10}</MediumText>
            <PaginationStyled>
                <div>
                    <PaginationButton onClick={decrementPage}> 🡸 </PaginationButton>
                </div>

                <div>
                    <PaginationButton onClick={incrementPage}> 🡺 </PaginationButton>
                </div>
            </PaginationStyled>
        </>
    );
}

export default Pagination;