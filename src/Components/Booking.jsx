import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Booking = () => {
    const [Details, setDetails] = useState([])
    const [Bookingdetails, setBookingDetails] = useState({
        username: '',
        email: "",
        mobile: '',
        bookedseats: '',
        age: ""

    })
    const navigate = useNavigate()
    const params = useParams()

    const handleInput = (e) => {
        const { name, value } = e.target
        setBookingDetails({
            ...Bookingdetails,
            [name]: value
        })
    }
    const handleForm = (e) => {
        e.preventDefault()
        localStorage.setItem("details", JSON.stringify(Bookingdetails))
        alert("Ticket Booked Sucessfully")
        setBookingDetails({
            username: '',
            email: "",
            mobile: '',
            bookedseats: '',
            age: ""
        })
        localStorage.getItem("details")
        navigate('/')

    }

    const GetBookingShow = async (url) => {
        try {
            const response = await fetch(url)
            const singledata = await response.json()
            setDetails([singledata])
        } catch (error) {
            document.write(error)
        }
    }
    useEffect(() => {
        GetBookingShow(`https://api.tvmaze.com/shows/${params.id}`)
    }, [])
    return (
        <>
            <div className='w-full flex justify-center items-center py-3'>
                <form className='ticket-form w-1/2 p-3 flex flex-col gap-6 justify-center items-center my-3 shadow-md' onSubmit={handleForm}>
                    <h1 className=' text-5xl font-bold mb-3'>Ticket Booking</h1>
                    {
                        Details?.map((elem) => {
                            return (
                                <div key={elem.id} className=' flex flex-col justify-center items-center'>
                                    <img src={elem.image ? elem.image?.medium : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} className='w-[50%]' />
                                    <h1 className='text-xl font-bold'>{elem.name}</h1>
                                </div>
                            )
                        })
                    }
                    <input
                        name='username'
                        type='text'
                        value={Bookingdetails.username}
                        placeholder='username'
                        className='w-4/5 border border-gray-400 p-3 rounded-md outline-none'
                        required
                        onChange={handleInput}
                    />
                    <input
                        name='email'
                        type='text'
                        value={Bookingdetails.email}
                        placeholder='email'
                        className='w-4/5 border border-gray-400 p-3 rounded-md outline-none'
                        required
                        onChange={handleInput}
                    />
                    <input
                        name='mobile'
                        type='number'
                        value={Bookingdetails.mobile}
                        placeholder='mobile-no.'
                        className='w-4/5 border border-gray-400 p-3 rounded-md outline-none'
                        required
                        onChange={handleInput}
                    />

                    <input
                        name='age'
                        type='number'
                        value={Bookingdetails.age}
                        placeholder='age'
                        className='w-4/5 border border-gray-400 p-3 rounded-md outline-none'
                        required
                        onChange={handleInput}
                    />

                    <input
                        name='bookedseats'
                        type='number'
                        value={Bookingdetails.bookedseats}
                        placeholder='seats booked'
                        className='w-4/5 border border-gray-400 p-3 rounded-md outline-none'
                        required
                        onChange={handleInput}
                    />

                    <button type='submit' className='w-[25%] border bg-black text-white font-bold py-3 text-xl'>Booked</button>
                </form>
            </div>
        </>
    )
}

export default Booking