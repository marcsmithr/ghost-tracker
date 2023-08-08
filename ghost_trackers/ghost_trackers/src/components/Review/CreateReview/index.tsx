import type { FC } from "react";
import { IReview } from '../../../types/Review'
import './index.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IAgent } from "../../../types/Agent";
import { useCreateReviewContext } from "../../../context/ReviewContext";


const CreateReview: FC<{agent: IAgent}> = ({agent}) => {
    const { isReviewModalOpen, setIsReviewModalOpen, reviewText, setReviewText, reviewStars, setReviewStars} = useCreateReviewContext();

    const[errors, setErrors] = useState<string[]>([])

    //closes the review modal and sets related variables to their default values
    async function closeReviewModal(){
        setReviewText('')
        setReviewStars('')
        setIsReviewModalOpen(false)
       }

    //sends a review post request to the server
    async function postNewReview(e:React.SyntheticEvent) {
        e.preventDefault()
        const res = await axios.post(`/agents/${agent.id}/reviews`,
        {
            agentId: agent.id,
            stars: reviewStars,
            review: reviewText
        }
        ).then(()=>{
            closeReviewModal();
        })
    }


    //sets a max character limit and prevents submission when limit is exceeded
    useEffect(()=>{
        if( reviewText.length <= 200){
          setErrors([])
        } else if(reviewText.length > 200){
        if(!errors.includes('Exceeded Character Max 200'))errors.push('Exceeded Character Max 200')
      }
      }, [reviewText])

    return(
        <div className="create-review-container">

            <form onSubmit={postNewReview} className="review-form">
                <ul className="form-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                 </ul>
                <select onChange={(e)=>setReviewStars(e.target.value)} value={reviewStars}>
                    <option>--Please select a star rating--</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                <textarea onChange={(e)=>setReviewText(e.target.value)} value={reviewText} className="review-text-input"></textarea>
                {(reviewStars.length === 0 || reviewText.length ===0||errors.length!==0) &&
                <button disabled type="submit" className="main-button disabled">Submit</button>
                }
                {(reviewStars.length > 0 && reviewText.length > 0 && errors.length===0) &&
                <button type="submit" className="main-button">Submit</button>
                }

            </form>
            <div className="close-review-button-container">
                <button onClick={()=>closeReviewModal()}>X</button>
            </div>
        </div>
    )

}

export default CreateReview
