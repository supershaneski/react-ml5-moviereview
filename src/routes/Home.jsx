import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getTrending } from '../api/server'
import classes from './Home.module.css'
import Banner from '../components/Banner'
import AppContext from '../lib/AppContext'

export default function Home() {

    const navigate = useNavigate()

    const appState = React.useContext(AppContext)

    const divRef = React.useRef()

    const { isLoading, error, data } = useQuery(['trending'], getTrending, {
        staleTime: parseInt(import.meta.env.VITE_STALETIME),
        cacheTime: parseInt(import.meta.env.VITE_CACHETIME),
        retry: 5,
    })

    React.useEffect(() => {
        
        if(data?.results) {

            let scroll = parseInt(appState.scroll)
            if(scroll) {
                if(scroll > 0 && divRef.current.scrollTop === 0) {
                    divRef.current.scrollTop = scroll
                }
            }

        }

    }, [data])

    const handleSelect = (param) => () => {

        appState.setScroll({ scroll: divRef.current.scrollTop })

        navigate(`/movie/${param.id}`, {
            state: {
                ...param
            }
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Banner />
            </div>
            <div ref={divRef} className={classes.main}>
                <div className={classes.banner}>
                    <h1 className={classes.bannerTitle}>Trending</h1>
                </div>
                <div className={classes.contents}>
                {
                    (!isLoading && data) && 
                    data.results.map((item) => {
                        //console.log(item)
                        return (
                            <div key={item.id} className={classes.movie}>
                                <img onClick={handleSelect({
                                    ...item
                                })} className={classes.poster} src={`${import.meta.env.VITE_TMDB_IMGURL}${item.poster_path}`} />
                                <div className={classes.title}>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}