
import { API_OPTIONS } from '../utils/constants.js'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice.js'
import { useEffect } from 'react'

//Fetch data from TMDB API and update store
const useNowPlayingMovies = () => { 

    const dispatch = useDispatch();
    const nowPlaying = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
    )
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        if(!nowPlaying) getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies