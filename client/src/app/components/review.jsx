import { motion } from "framer-motion";
import '../styles/app.css';
import { Star } from "@mui/icons-material";
import { reviews } from "../../public/reviews";
import { useEffect, useState } from "react";

export const Review = ({ review, rotateY }) => {
    const [dynamicReview, setDynamicReview] = useState([reviews[0]]);

    useEffect(() => {
        const event = review.onChange((value) => {
            setDynamicReview(
                value < 0.5 ? reviews[0] : reviews[1]
            )
        });

        return () => event();
    }, []);

    return (
        <motion.div 
        className="review-container"
        style={{ rotateY }}
        >
           <motion.text className="review-content">{dynamicReview.review}</motion.text> 
           <motion.text className="review-content">~ {dynamicReview.name}</motion.text>
            <motion.div className="star-container">
                {Array.from({ length: dynamicReview.stars }).map((_, index) => (
                    <Star key={index}/>
                ))}
            </motion.div>
        </motion.div>
    )
}