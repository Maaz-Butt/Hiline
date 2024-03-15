import Button from '../components/Button'

const WorkExtra = () => {
    return (
        <div className='my-10 max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-10 p-10'>
            <div className="flex gap-7 flex-col justify-center text-start order-last">
                <h1 className='text-4xl font-bold'>Tailored Solutions for Every Business</h1>
                <p className='leading-9 text-2xl my-5'>At <span className='text-orange-500'>Hiline</span>, we recognize that each business has its unique
                    requirements. With our diverse range of services, we cater to a
                    wide array of industries, ensuring that your commercial space is
                    customized to meet your specific needs. From concept
                    development to project execution, we handle every aspect of the
                    renovation process with utmost professionalism and attention to
                    detail</p>

                <Button title="View Our Simple Design Process" />
            </div>
            <div>
                <img src="/img5.png" alt="after" className='object-cover h-full w-full rounded-xl' />
            </div>
        </div>
    )
}

export default WorkExtra