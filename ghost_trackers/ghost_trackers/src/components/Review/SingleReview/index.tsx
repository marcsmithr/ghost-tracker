import type { FC } from "react";
import { IReview } from '../../../types/Review'
import './index.css'

const Review: FC<{review: IReview}> = ({review}) => {

    return(
        <div className="review-container">
            <div className="stars-container">
                <i className="fa-solid fa-star"></i>
                <span className="star-rating">{review.stars}</span>
            </div>
            <div className="review-text-container">
                <span>{review.review}</span>
            </div>
        </div>
    )

}

export default Review
