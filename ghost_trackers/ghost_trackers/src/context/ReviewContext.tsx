//creates context that allows us to open and close the create review modal and update related variables accordingly
import { createContext, useContext } from "react";


export type GlobalCreateReviewContent = {
    isReviewModalOpen: boolean
    setIsReviewModalOpen: (c:boolean) => void
    reviewText: string
    setReviewText: (c:string) => void
    reviewStars: string
    setReviewStars: (c:string) => void
}


export const CreateReviewContext = createContext<GlobalCreateReviewContent>({
    isReviewModalOpen: false,
    setIsReviewModalOpen: (_value: boolean) => {},
    reviewText: '',
    setReviewText: (_value: string) => {},
    reviewStars: '',
    setReviewStars: (_value: string) => {},
})

export const useCreateReviewContext = () => useContext(CreateReviewContext)
