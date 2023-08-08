import type { FC } from "react";
import { useContext, useState } from "react";
import SignupFormModal from "../SignupFormModal";
import { useSignupModalContext } from "../../context/SignupContext";


import './index.css'
import SearchBar from "../Search/SearchBar";

const Navigation: FC = () => {
    const { isSignupModelOpen, setisSignupModelOpen} = useSignupModalContext()


    //alternates signupModal between being visible and not visible when the join the team button is clicked
    const signupModalId = isSignupModelOpen? "" : "hidden";
  return (
    <div className="nav-bar">
        <div className="nav-brand">
            <i className="fa-solid fa-ghost brand-icon"></i>
            <span className="brand-name">Ghost Trackers</span>
        </div>
        <div className="nav-search">
            <SearchBar/>
        </div>
        <div className="nav-join" id="nav-join-column">
            <button className="main-button join-button" onClick={()=>setisSignupModelOpen(true)}>Join the team!</button>
            <div id={signupModalId}>
                <SignupFormModal/>
            </div>
        </div>
    </div>
  );
};

export default Navigation;
