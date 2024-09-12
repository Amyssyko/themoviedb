import React from 'react'
import Link from 'next/link'

import { Movie } from '../types/movies.d'

interface Props {
  movies?: Movie[]
  numberPage?: number
}

function ListMovies({ movies }: Props) {
    return (
        <>
            <section className="grid w-full h-full grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8">
                { movies && movies?.map(({ id, title, poster_path, original_title, overview }, index) => {
                    const newColoBg = index % 2 === 0 ? 'bg-cyan-100/80' : ' bg-fuchsia-100/80'
                    return <article className={` p-2 ${newColoBg}`} key={index}>
                        <Link href={`/${id}`} target='_parent' referrerPolicy='no-referrer'>
                            <div className='grid justify-items-center '>
                                <img className= 'h-full w-full rounded-md object-cover '
                                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                            </div>
                            <p className='grid px-2'>
                                <span className='text-sm text-center font-semibold text-indigo-600 hover:text-blue-900'>{title}</span>
                                <span className='text-justify font-serif'>{overview}</span>
                            </p>
                        </Link>
                    </article>
                })
                }
            </section>

        </>)
}

export default ListMovies
