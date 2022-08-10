import React from 'react'
import classes from './Review.module.css'
import * as ml5 from 'ml5'

export default function Review({ author, date, content }) {

    const [score, setScore] = React.useState('')

    React.useEffect(() => {

        const sReview = content.join('')

        const sentiment = ml5.sentiment('movieReviews', handleModelLoaded)

        function handleModelLoaded() {
            
            const prediction = sentiment.predict(sReview)

            setScore(parseFloat((100 * prediction.score).toFixed(1)))
            
        }

    }, [])

    return (
        <div className={classes.review}>
            <div className={classes.reviewHeader}>
                <div className={classes.author}>{author}</div>
                <div className={classes.date}>{date}</div>
                <div className={classes.score}>Score: {score}</div>
            </div>
            <div className={classes.content}>
            {
                content.map((item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })
            }
            </div>
        </div>
    )
}