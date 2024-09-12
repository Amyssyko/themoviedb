export const getMovies = async({ url }: {url:string}) => {
    const res = await fetch(url)
    const data = await res.json()
    return data.results ? data.results : data
}
