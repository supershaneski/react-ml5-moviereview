import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import classes from './Movie.module.css'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import { getDateYear, getRate } from '../lib/utils'
import HouseIcon from '../icons/House'

export default function Movie() {

    const navigate = useNavigate()
    const { movieId } = useParams()
    const { state } = useLocation()

    const handleHome = () => {
        navigate('/')
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Banner />
            </div>
            <div className={classes.main}>
                <div className={classes.movie} style={{
                    backgroundImage: `url(${import.meta.env.VITE_TMDB_IMGURL}${state.backdrop_path})`
                }}>
                    <div className={classes.banner}>
                        <div className={classes.titleDiv}>
                            <h1 className={classes.title}>{state.title}</h1>
                        </div>
                        <div className={classes.descriptionDiv}>
                            <span className={classes.year}>{getDateYear(state.release_date)}</span>
                            <span className={classes.rate}>{getRate(state.vote_average)}</span>
                        </div>
                        <div className={classes.overviewDiv}>
                            <p className={classes.overview}>{state.overview}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.reviewDiv}>
                    <div className={classes.reviewTitleDiv}>
                        <h4 className={classes.reviewTitle}>User Reviews</h4>
                    </div>
                    <div className={classes.reviewContents}>
                        <Reviews movieId={movieId} />
                    </div>
                </div>
            </div>
            <div className={classes.fab} onClick={handleHome}>
                <div className={classes.icon}><HouseIcon color="#333333" /></div>
            </div>
        </div>
    )
}