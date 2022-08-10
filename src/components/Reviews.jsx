import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../api/server'
import classes from './Reviews.module.css'
import Review from './Review'
import { formatReview, formatDate } from '../lib/utils'

export default function Reviews({ movieId }) {

    const { isLoading, isError, error, data } = useQuery(['reviews', { movieId }], getReviews, {
        staleTime: parseInt(import.meta.env.VITE_STALETIME),
        cacheTime: parseInt(import.meta.env.VITE_CACHETIME),
        retry: 5,
    })

    return (
        <div className={classes.container}>
        {
            (!isLoading && data.results.length === 0) &&
            <div className={classes.emptyResult}>
                <span>No reviews yet</span>
            </div>
        }
        {
            (!isLoading && data.results.length > 0) &&
            data.results.map((item) => {
                
                const reviewToken = formatReview(item.content)
                
                return (
                    <Review 
                    key={item.id}
                    author={item.author} 
                    date={formatDate(item.updated_at)}
                    content={reviewToken}
                    />
                )
            })
        }
        </div>
    )
}