const Hero = () => {
    return (
        <div className='h-[100vh] mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 text-center flex justify-center items-center flex-col'>
            <h1 className='text-6xl font-bold pt-10 pl-10' ><span className='text-orange-600' >Renovation</span> Services</h1>
            <p className='pt-5 lg:px-48 md:px-16 tracking-wide'>Welcome to <span className='text-orange-600'> Hiline </span>, your trusted interior design and architecture company in Lahore! We specialize in providing top-notch renovation services for a
                wide range of spaces, including homes, commercial plazas, offices, and various other commercial and residential properties. Our team of skilled
                professionals is dedicated to transforming your space into a captivating and functional environment that exceeds your expectations.</p>
            <div className="flex justify-between mt-10 h-[70vh] w-full max-w-7xl gap-5">
                <div>
                    <img src="/img1.png" alt="before" className='object-cover h-full w-full rounded-xl' />
                </div>
                <div>
                    <img src="/img2.png" alt="after" className='object-cover h-full w-full rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default Hero