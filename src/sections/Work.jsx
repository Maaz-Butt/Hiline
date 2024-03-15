import React from 'react'

const Work = () => {
    return (
        <div className='my-10 max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10'>
            <div className="flex gap-7 flex-col justify-center text-start">
                <h1 className='text-4xl font-bold'>Transforming Your Commercial Space</h1>
                <p className='leading-9 text-2xl'>When it comes to commercial renovations, we believe in the power
                    of transformation. Our team of experienced architects and interior
                    designers collaborate closely with you to understand your vision and
                    goals. We work diligently to create a design plan that maximizes your
                    space's potential and aligns with your brand identity. Whether you're
                    looking to update your office layout, revamp your storefront, or
                    modernize your entire commercial plaza, we have the expertise and
                    creativity to bring your vision to life. Our team carefully considers
                    factors such as functionality, aesthetics, and efficiency to deliver a
                    space that not only looks remarkable but also enhances productivity
                    and customer experience.</p>
            </div>
            <div>
                <img src="/img4.png" alt="work1" className='object-cover h-full w-full rounded-xl' />
            </div>
        </div>
    )
}

export default Work