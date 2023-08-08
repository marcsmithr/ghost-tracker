import type { FC } from "react";
import { useState } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import Navigation from "../Navigation";
import { IAgent } from "../../types/Agent";
import { SignupModalContext } from "../../context/SignupContext";
import { AgentsContext } from "../../context/AgentContext";
import { SearchContext } from "../../context/SearchContext";
import { AgentDetailsContext } from "../../context/AgentDetailsContext";
import { CreateReviewContext } from "../../context/ReviewContext";

const App: FC = () => {
  const [isSignupModelOpen, setisSignupModelOpen] = useState<boolean>(false)
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [searchResults, setSearchResults] = useState<String[]>([])
  const [searchedAgents, setSearchedAgents] = useState<IAgent[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isAgentModalOpen, setIsAgentModalOpen] = useState<boolean>(false)
  const [targetAgentId, setTargetAgentId] = useState<string>('-1')
  const [isReviewModalOpen, setIsReviewModalOpen]= useState<boolean>(false)
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewStars, setReviewStars] = useState<string>('')

  return (
    <div className="app">
      <AgentsContext.Provider value={{agents, setAgents}}>
        <CreateReviewContext.Provider value={{isReviewModalOpen, setIsReviewModalOpen, reviewText, setReviewText, reviewStars, setReviewStars}}>
          <AgentDetailsContext.Provider value={{isAgentModalOpen, setIsAgentModalOpen, targetAgentId, setTargetAgentId}}>
            <SearchContext.Provider value={{searchResults, setSearchResults, searchedAgents, setSearchedAgents, searchQuery, setSearchQuery}}>
              <SignupModalContext.Provider value= {{isSignupModelOpen, setisSignupModelOpen}}>
                <Navigation/>
                <Agents />
              </SignupModalContext.Provider>
            </SearchContext.Provider>
          </AgentDetailsContext.Provider>
        </CreateReviewContext.Provider>
      </AgentsContext.Provider>

    </div>
  );
};

export default App;
