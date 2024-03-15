import Button from '../components/Button'

const Pakages = () => {
    return (
        <div className='max-w-7xl mx-auto text-center my-10 p-10'>
            <h1 className='font-bold text-4xl'>Our Renovation Services Include</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 my-10 gap-5'>
                <div className=''>
                    <Button title="Office Renovation" />
                    <p className='text-start text-lg leading-8 mt-5'>We create inspiring work environments that promote collaboration,
                        productivity, and employee well-being. Whether you require a
                        complete office overhaul or a targeted update, we strive to
                        optimize your workspace for maximum efficiency and comfort.</p>
                </div>
                <div className=''>
                    <Button title="Retail Renovation" />
                    <p className='text-start text-lg leading-8 mt-5'>We specialize in creating captivating retail spaces that attract
                        customers and enhance the shopping experience. Our team
                        understands the importance of visual merchandising, traffic flow,
                        and branding, ensuring that your store stands out from the
                        competition.</p>
                </div>
                <div className='h-full w-full rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' />
                <div className=''>
                    <Button title="Hospitality Renovation" />
                    <p className='text-start text-lg leading-8 mt-5'>From hotels to restaurants, we know how crucial it is to create an
                        inviting atmosphere for guests. Our expertise in hospitality
                        renovations allows us to transform ordinary spaces into
                        extraordinary destinations that leave a lasting impression on
                        visitors.</p>
                </div>
                <div className=''>
                    <Button title="Commercial Plaza Renovation" />
                    <p className='text-start text-lg leading-8 mt-5'>We undertake comprehensive renovations for commercial plazas,
                        including common areas, lobbies, and exterior facades. Our goal is
                        to revitalize these spaces, making them visually appealing and
                        functional for both tenants and visitors</p>
                </div>
                <div className='h-full w-full rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500' />
            </div>
        </div>
    )
}

export default Pakages