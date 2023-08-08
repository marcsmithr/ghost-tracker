//creates context that allows us to open and close the signup modal
import { createContext, useContext } from "react";


export type GlobalSignupModalContent = {
    isSignupModelOpen: boolean
    setisSignupModelOpen: (c:boolean) => void
}


export const SignupModalContext = createContext<GlobalSignupModalContent>({
    isSignupModelOpen: false,
    setisSignupModelOpen: (_value: boolean) => {},
})

export const useSignupModalContext = () => useContext(SignupModalContext)
