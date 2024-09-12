import Link from 'next/link'
import React, { Suspense } from 'react'

import { getMovies } from '../../services/getMovies'
import { Genre, Movie, ProductionCompany, SpokenLanguage } from '../../types/movies.d'
import { API_KEY } from '../utils/const'
import Home from '../page'
import LoadingSkeleton from '../../components/LoadingSkeleton'

async function MovieById({ params }: {params: {id: string}}) {
    const ID = params.id
    const urlById = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`
    const data:Movie = await getMovies({ url: urlById })
    const { id, title, original_title, overview, genres, homepage, poster_path, production_companies, status, spoken_languages } = data
    const url = homepage || '#'

    return (
        <>
            <article className='relative w-full min-h-screen max-h-full bg-orange-50' key={id}>

                <section className='grid justify-items-center place-items-center place-content-center overflow-hidden '>

                    <span className='text-lg  font-bold text-indigo-600 hover:text-blue-900'>{title}</span>
                    <Link className='text-center font-serif' href={url} referrerPolicy='no-referrer' target='_blank'>
                        <div className='grid justify-items-center '>
                            <img className= 'top-0 h-[580px] w-full rounded-md  object-cover '
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                        </div>
                    </Link>
                    <div className='grid grid-rows-[repeat(auto-fill,minmax(10px,1fr))] justify-items-center place-content-center place-items-center gap-1 py-2'>
                        <p className='font-bold hover:text-neutral-700 text-black' >{status}</p>
                        {spoken_languages && spoken_languages.map((language: SpokenLanguage) => {
                            const newColorHover = language.name === 'English'
                                ? 'hover:text-blue-800 '
                                : (language.name === 'Español' ? ' hover:text-pink-700' : ' hover:text-green-700')
                            return <p className={` text-black font-medium  ${newColorHover}`} key={language.name}>{language.name}
                            </p>
                        })
                        }
                    </div>
                    <p className='w-1/2 text-justify font-medium hover:text-neutral-700 text-black' >
                        {overview}
                    </p>
                    <p className='text-justify font-serif text-sm flex flex-grow justify-items-stretch gap-4 items-center mx-2 my-1'>
                        {genres && genres.map((genre: Genre, index: number) => {
                            const newColorHover = index % 2 === 0 ? 'hover:text-blue-800' : ' hover:text-pink-700'
                            const newColor = index % 2 === 0 ? 'text-cyan-900' : ' text-fuchsia-600'

                            return <small className={`${newColor} ${newColorHover} text-lg`} key={ index}>{genre.name}</small>
                        })}
                    </p>
                    <span className='text-center font-semibold'>
                        Companies
                        {production_companies && production_companies.map((company: ProductionCompany) => {
                            return <span className='flex justify-center items-center text-center py-1 mx-auto' key={ company.id}>
                                <picture className=' grid grid-cols-1'>
                                    {company.logo_path && <img className='w-full h-[27px]' src={ `https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name}></img>}
                                    <small className='my-2'>{company.name}</small>
                                </picture>
                            </span>
                        }
                        )
                        }
                    </span>
                </section>

            </article>
            <Suspense fallback={ <LoadingSkeleton/>}>
                <Home />
            </Suspense>
        </>

    )
}

export default MovieById
