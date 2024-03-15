import React from 'react'

const Card = (props) => {
  
    const title = props.title
    const details = props.details
    const src = props.img

    return (
    <div className='text-start bg-gray-300 hover:bg-cyan-300 transition-all duration-500 cursor-pointer rounded-lg h-100 p-5' >
        <img className='rounded-lg object-cover h-52 w-full' src={src}/>
        <h1 className='font-bold my-3' >{title}</h1>
        <p className='mb-2 text-sm' >{details}</p>
    </div>
  )
}

export default Card