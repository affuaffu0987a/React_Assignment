import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../ContextApi/Store'
import { Link } from 'react-router-dom'

const Home = () => {
    const [ShowsData, setShowsData] = useState([])

    const { Queries, Loader, setLoader } = useGlobalContext()
    const URL = `https://api.tvmaze.com/search/shows?q=${Queries}`

    const GetShows = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (data && data.length) {
                setShowsData(() => data.map((ele) => ele.show))
                setLoader(false)
            }
        } catch (error) {
            document.write(error)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            GetShows(URL)
        }, 1000)
        return () => clearTimeout(timer)
    }, [Queries])
    return (
        <>
            <div className='w-full '>
                <div className='Home-page flex flex-wrap w-4/5 p-3  m-auto gap-7 justify-center items-center'>
                    {Loader ? <span className="loader"></span> : null}
                    {
                        ShowsData?.map((elements) => {
                            const title = elements.name.slice(0, 9)
                            return (
                                <div key={elements.id} className='hover:-translate-y-1 ease-in duration-75'>
                                    <img src={elements.image ? elements.image?.medium : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} alt='poster' />
                                    <div className='movie-contain shadow-md p-2 flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-xl font-bold'>{title}..</h1>
                                            <h1 className='text-sm opacity-60'>{elements.premiered}</h1>
                                        </div>
                                        <div>
                                            <Link to={`/single/${elements.id}`}><button className='bg-black text-white px-1 py-1'>Read More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home