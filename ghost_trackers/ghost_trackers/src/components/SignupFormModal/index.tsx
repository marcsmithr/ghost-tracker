import type { FC } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";

import './index.css'
import { useSignupModalContext } from "../../context/SignupContext";
import { useAgentsContext } from "../../context/AgentContext";

const SignupFormModal: FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [agentLicence, setAgentLicence] = useState("");
    const [address, setAddress] = useState("");
    const [practiceAreas, setPracticeAreas] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    const [errors, setErrors] = useState<string[]>([]);

    const {isSignupModelOpen, setisSignupModelOpen} = useSignupModalContext();
    const {agents, setAgents}= useAgentsContext();


    //closes the signupModal and sets all related variables to their default values
    async function closeModal (){
      setisSignupModelOpen(false)
      setFirstName('')
      setLastName('')
      setPhotoUrl('')
      setAgentLicence('')
      setAddress('')
      setPracticeAreas('')
      setAboutMe('')
      setErrors([])
    }

    //sends a post request to the server to create a new agent
    //closes the signupModal
    //dynamically displays the newly created agent
    async function postNewAgent(e: React.SyntheticEvent){
      e.preventDefault()
      let removedSpacesPA = practiceAreas.replaceAll(', ', ',')
      setPracticeAreas(removedSpacesPA)
      const res  = await axios.post("/agents",
      {
        firstName, lastName, photoUrl,
        agentLicence, address, practiceAreas,
        aboutMe
      }
      )
      .catch((error)=>console.log(error))
      .then(()=>closeModal())
      .then(()=>{
        async function fetchInitialData() {
          const response = await axios.get("/agents");
          setAgents(response.data)
        }
        fetchInitialData();
      })
    }


    //sets a character limit of 500 to the about me section
    useEffect(()=>{
      if( aboutMe.length <= 500){
        setErrors([])
      } else if(aboutMe.length > 500){
      if(!errors.includes('Exceeded Character Max 500'))errors.push('Exceeded Character Max 500')
    }
    }, [aboutMe])

    return(
        <div className="modal">
          <div className="modal-background" onClick={()=>closeModal()} />
          <div className="signup-modal-content">
          <div className="form-modal-main-container">
      <div className="form-header-div">
        <h1>Sign Up</h1>
      </div>
      <div className="form-inner-container">
      <form  className='signup-form' onSubmit={postNewAgent}>
        <ul className="form-errors">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="url"
            placeholder="Photo Url"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="License"
            value={agentLicence}
            onChange={(e) => setAgentLicence(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Practice Areas Comma Seperated"
            value={practiceAreas}
            onChange={(e) => setPracticeAreas(e.target.value)}
          />
        </div>
        <div className="form-input-container">
          <textarea
            className="form-input text-area"
            placeholder="About Me"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </div>
        {(!firstName || !lastName || !photoUrl || !agentLicence || !address || errors) &&
          <div className="form-button-container">
            <button disabled type="submit" className="main-button disabled">Sign Up</button>
          </div>
        }
        {(firstName && lastName && photoUrl && agentLicence && address && !errors) &&
          <div className="form-button-container">
            <button type="submit" className="main-button">Sign Up</button>
          </div>
        }
      </form>
      </div>
    </div>
          </div>
        </div>
    );
};


export default SignupFormModal;
