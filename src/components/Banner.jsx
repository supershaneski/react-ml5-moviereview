import React from 'react'
import LogoIcon from '../icons/TMDB'
import classes from './Banner.module.css'

export default () => {
    return (
        <div className={classes.container}>
            <span className={classes.powerBy}>Powered by</span><div className={classes.logo}><LogoIcon /></div>
        </div>
    )
}