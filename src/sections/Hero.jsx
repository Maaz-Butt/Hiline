const Hero = () => {
    return (
        <div className='my-3 mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 text-center flex justify-center items-center flex-col'>
            <h1 className='text-6xl font-bold pt-10 pl-10' ><span className='text-orange-500' >Renovation</span> Services</h1>
            <p className='pt-5 lg:px-48 md:px-16 tracking-wide'>Welcome to <span className='text-orange-600'> Hiline </span>, your trusted interior design and architecture company in Lahore! We specialize in providing top-notch renovation services for a
                wide range of spaces, including homes, commercial plazas, offices, and various other commercial and residential properties. Our team of skilled
                professionals is dedicated to transforming your space into a captivating and functional environment that exceeds your expectations.</p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10 w-full max-w-7xl gap-5">
                <div className="my-10">
                    <h1 className="text-start font-bold my-3">BEFORE</h1>
                    <img src="/img1.png" alt="before" className='object-cover h-full w-full rounded-xl' />
                </div>
                <div className="my-10">
                    <h1 className="text-start font-bold my-3">AFTER</h1>
                    <img src="/img2.png" alt="after" className='object-cover h-full w-full rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero