//creates contexts that allows us to access an array of all agents throughout the app
import { createContext, useContext } from "react";

import { IAgent } from "../types/Agent";

export type GlobalAgentsContent = {
    agents: IAgent[]
    setAgents:(agents:IAgent[]) => void
}

export const AgentsContext = createContext<GlobalAgentsContent>({
    agents: [],
    setAgents: (_value: IAgent[]) => {},
})

export const useAgentsContext = () => useContext(AgentsContext)
