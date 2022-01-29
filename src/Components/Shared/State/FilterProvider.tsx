import React from "react";
import {Filter, useFilter} from "../../Hooks/useFilter";

const FilterContext = React.createContext<ReturnType<typeof useFilter> | null>(
    null
);

export const useFilterContext = () => React.useContext(FilterContext)!;

export function FilterProvider({ startFilter, children }: { startFilter: Filter<any>, children: React.ReactNode }) {
    return (
        <FilterContext.Provider value={useFilter(startFilter)}>
            {children}
        </FilterContext.Provider>
    );
}