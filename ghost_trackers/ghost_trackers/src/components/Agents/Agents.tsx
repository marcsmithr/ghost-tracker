import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'
import { useAgentsContext } from "../../context/AgentContext";
import { useSearchContext } from "../../context/SearchContext";

const Agents: FC = () => {

  const {agents, setAgents} = useAgentsContext();
  const {searchedAgents} = useSearchContext();


  //fetches and sets agent data to be displayed on splashpage
  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, []);

  return (
    <>
      {(searchedAgents.length === 0) &&
        <div className="agents">
          {agents.map((agent) => (
            <Agent key={agent.id} agent={agent} />
          ))}
        </div>
        }
        {(searchedAgents.length !== 0) &&
          <div>

            {searchedAgents.map((agent) => (
                <Agent key={agent.id} agent={agent} />
            ))}
        </div>
      }
    </>
  );
};

export default Agents;
