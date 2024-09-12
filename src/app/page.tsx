import ListMovies from '../components/ListMovies'
import { getMovies } from '../services/getMovies'

import { API_KEY } from './utils/const'

export default async function Home() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=true&language=en-US&page=1&sort_by=popularity.desc`
    // `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    // `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`

    const movies = await getMovies({ url })

    return (
        <>
            <main className="flex min-h-screen max-h-full flex-col items-center justify-between p-8">
                <ListMovies movies={movies}/>
            </main>

        </>)
}

