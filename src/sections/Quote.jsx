const Quote = () => {
    return (
        <div className='mt-10 max-w-8xl p-10 grid lg:grid-cols-2 sm:grid-cols-1 py-5 justify-evenly items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div>
                <h1 className='text-white tracking-[5px] py-2 lg:pl-20' >GET A FREE QUOTE</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-5'>
                <input className='rounded-lg p-2 placeholder:text-gray-800 focus:outline-none' placeholder='Name' type="text" />
                <input className='rounded-lg p-2 placeholder:text-gray-800 focus:outline-none' placeholder='Number' type="number" />
                <input className='rounded-lg p-2 placeholder:text-gray-800 focus:outline-none' placeholder='Message' type="text" />
                <button className='h-10 w-[100px] bg-transparent text-white font-semibold border-2 border-white rounded-lg hover:bg-white hover:text-gray-800'
                >SUBMIT</button>
            </div>
        </div>
    )
}

export default Quote