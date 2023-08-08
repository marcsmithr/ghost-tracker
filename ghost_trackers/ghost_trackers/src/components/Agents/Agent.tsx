import type { FC } from "react";
import { IAgent } from "../../types/Agent";

import './Agent.css'
import { useAgentDetailsContext } from "../../context/AgentDetailsContext";
import AgentDetailsModal from "./AgentDetails";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  const {isAgentModalOpen, setIsAgentModalOpen, targetAgentId, setTargetAgentId} = useAgentDetailsContext();


  //alternates agentDetailsModal between being visible and not visible when the agent card is clicked
  const agentDetailsModalId = isAgentModalOpen? "" : "hidden";
  return (
    <div className="container" onClick={()=>{
      setIsAgentModalOpen(true)
      setTargetAgentId(agent.id)
      }}>
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body">{agent.aboutMe}</div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
      { (targetAgentId==agent.id) &&
      <div id={agentDetailsModalId}>
        <AgentDetailsModal key={agent.id} agent={agent}/>
      </div>
    }
    </div>
  );
};

export default Agent;
