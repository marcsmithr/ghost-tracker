import React, { useContext} from "react"
import './SearchBar.css'
import { useSearchContext } from "../../context/SearchContext"
import { useAgentsContext } from "../../context/AgentContext"
import { IAgent } from "../../types/Agent"


function SearchBar (){
    const {searchResults, setSearchResults, setSearchedAgents, searchQuery, setSearchQuery} = useSearchContext();
    const {agents, setAgents} = useAgentsContext();

    //dynamically sets an array, "searchResults" of practice areas the match the current input
    //dynamically sets an array, "searchedAgents" of agents that have practice areas that match the current input
    //If there are no matching results or if there is no input function sets searched agents to all agents
    const handleInput= (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        const length = value.length
        if(length===0){
            setSearchedAgents(agents)
            setSearchResults([])
            setSearchQuery('')
        }else{
            setSearchQuery(value)
            let results : String[] = []
            let agentsArray : IAgent[] = []
            agents.forEach((agent)=>{
                if(agent.practiceAreas){
                let practiceAreasArray : string[] = agent.practiceAreas.split(',')
                practiceAreasArray.forEach((practiceArea)=>{
                    if (practiceArea.toLowerCase().slice(0,length)===value.toLowerCase()){
                        if(!agentsArray.includes(agent)){
                        agentsArray.push(agent)
                        }
                        if(!results.includes(practiceArea)){
                            results.push(practiceArea)
                        }
                    }
                })}
            })

                if(results.length === 0){
                    setSearchResults(["No results found"])
                    setSearchedAgents(agents)
                }else{
                setSearchResults(results)
                setSearchedAgents(agentsArray)
                }
        }
        }

        //displays a modal of search results when there is a search query
        const searchResultsId = searchQuery? "":"hidden"
    return(
        <div className="search-container">
            <input type="search" onChange={handleInput} value={searchQuery} className="search-input" placeholder="Search Practice Areas..."></input>
            <div className="search-results-container" id={searchResultsId}>
                <div className="search-result">
                {searchResults &&
                    searchResults.map((result)=>(
                        <div>
                            <span>{result}</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SearchBar
