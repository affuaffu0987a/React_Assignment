import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../ContextApi/Store'

const SingleShow = () => {
    const [ShowDetails, setShowDetails] = useState([])
    const params = useParams()
    const { Loader, setLoader } = useGlobalContext()
    const GetSingleShow = async (url) => {
        try {
            const response = await fetch(url)
            const singledata = await response.json()
            setShowDetails([singledata])
            setLoader(false)
        } catch (error) {
            document.write(error)
        }
    }
    useEffect(() => {
        GetSingleShow(`https://api.tvmaze.com/shows/${params.id}`)
    }, [])
    return (
        <>
            <div className=' w-full'>
                <div className='singleshow w-[80%] m-auto flex items-center'>
                    {Loader ? <span className="loader"></span> : null}
                    {
                        ShowDetails?.map((elem) => {
                            const summary = elem.summary.slice(3, -4)
                            return (
                                <div key={elem.id} className='singleshow-contain flex w-full gap-9 justify-center items-center'>
                                    <img src={elem.image ? elem.image?.medium : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} />
                                    <div>
                                        <h1 className='text-3xl font-bold '>{elem.name}</h1>
                                        <div className='flex gap-3'>
                                            {elem.genres.map((genre, index) => <p key={index} className='opacity-60 '>{genre}</p>)}
                                        </div>
                                        <p className='text-lg opacity-60 mt-6'>{summary}</p>
                                        <Link to={`/booking/${elem.id}`}><button className='bg-green-900 text-white font-bold px-4 py-2 mt-2' >Book Now</button></Link>
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

export default SingleShow