export async function getTrending({ signal }) {

    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_APIKEY_v3}`

    const response = await fetch(url, { signal })

    const result = await response.json()

    return result

}

export async function getReviews({ signal, queryKey }) {

    const movie_id = queryKey[1].movieId

    const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${import.meta.env.VITE_TMDB_APIKEY_v3}&language=en-US&page=1`
    
    const response = await fetch(url, { signal })

    const result = await response.json()

    return result

}