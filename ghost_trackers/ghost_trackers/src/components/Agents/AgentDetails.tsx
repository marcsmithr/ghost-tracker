import type { FC } from "react";
import React, { useEffect, useState } from "react";

import './AgentDetails.css'
import { useAgentsContext } from "../../context/AgentContext";
import { useAgentDetailsContext } from "../../context/AgentDetailsContext";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import { IReview } from "../../types/Review";
import Review from "../Review/SingleReview";
import CreateReview from "../Review/CreateReview";
import { useCreateReviewContext } from "../../context/ReviewContext";




const AgentDetailsModal: FC<{agent: IAgent}> = ({agent}) => {
    const [reviews, setReviews] = useState<IReview[]>([])

    const {isAgentModalOpen, setIsAgentModalOpen} = useAgentDetailsContext()
    const {isReviewModalOpen, setIsReviewModalOpen, setReviewText, setReviewStars} = useCreateReviewContext();



    // closes the agentDetailsModal and sets related variables to their default
   async function closeAgentModal(e:any){
    e.stopPropagation()
    setReviewText('')
    setReviewStars('')
    setIsAgentModalOpen(false)
    setIsReviewModalOpen(false)
   }

   //fetches agent's reviews upon opening or closing agent or review modals
   //this allows us to dynamically render new comments
    useEffect(()=>{
      async function fetchReviewsByAgentId(agentId:string){
        const response = await axios.get(`/agents/${agentId}/reviews`);
        setReviews(response.data)
      }
      fetchReviewsByAgentId(agent.id)
    }, [isAgentModalOpen, isReviewModalOpen])


    //alternates createReviewModal between being visible and not visible when the create review button is clicked
    const createReviewId = isReviewModalOpen? "" : "hidden"

      return(
          <div className="modal">
            <div className="modal-background" onClick={(e)=>closeAgentModal(e)} />
              <div className="modal-content">
                  <div className="agent-details-main-container">
                      <h2>{agent.firstName} {agent.lastName}</h2>
                      <img src={agent.photoUrl} alt={agent.firstName} className="agent-photo"></img>
                      <div className="agent-details">
                        <div>
                          <span className="agent-detail">License: </span>
                          <span>{agent.agentLicence}</span>
                        </div>
                        <div>
                          <span className="agent-detail">Address: </span>
                          <span>{agent.address}</span>
                        </div>
                        {agent.practiceAreas&&
                        <div>
                          <span className="agent-detail">Practice Areas: </span>
                          <span>{agent.practiceAreas.replaceAll(',', ', ')}</span>
                        </div>
                        }
                      </div>
                      {reviews.length!== 0 &&
                      <div className="reviews-outer-container">
                          <h3>Reviews</h3>
                          <div className="reviews-inner-container">
                            {reviews.map((review)=>(
                              <Review key={review.id} review={review}/>
                            ))}
                          </div>
                      </div>
                      }
                      <div>
                        <button className='main-button create-review-button' onClick={()=>setIsReviewModalOpen(true)}>Create Review</button>
                      </div>

                  </div>
                      <div id={createReviewId} className="review-outer-container">
                        <CreateReview key={agent.id} agent={agent}/>
                      </div>
              </div>
            </div>
      );

};


export default AgentDetailsModal;
