//creates a context that allows us to open and close a specific agent's details modal
import { createContext, useContext } from "react";


export type GlobalAgentDetailsContent = {
    isAgentModalOpen: boolean
    setIsAgentModalOpen: (c:boolean) => void
    targetAgentId: string
    setTargetAgentId: (c:string) => void
}


export const AgentDetailsContext = createContext<GlobalAgentDetailsContent>({
    isAgentModalOpen: false,
    setIsAgentModalOpen: (_value: boolean) => {},
    targetAgentId: '-1',
    setTargetAgentId: (_value: string) => {},
})

export const useAgentDetailsContext = () => useContext(AgentDetailsContext)
