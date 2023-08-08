//creates context which allows us to read and set variables related to the search bar
import { createContext, useContext } from "react";
import { IAgent } from "../types/Agent";


export type GlobalSearchContent = {
    searchResults: String[]
    setSearchResults: (searchResultArray:String[]) => void
    searchedAgents: IAgent[]
    setSearchedAgents: (searchedAgentsArray:IAgent[]) => void
    searchQuery: string
    setSearchQuery: (searchQueryString:string) => void
}


export const SearchContext = createContext<GlobalSearchContent>({
    searchResults: [],
    setSearchResults: (_value: String[]) => {},
    searchedAgents: [],
    setSearchedAgents: (_value: IAgent[]) => {},
    searchQuery: '',
    setSearchQuery: (_value: string) => {}
})

export const useSearchContext = () => useContext(SearchContext)
