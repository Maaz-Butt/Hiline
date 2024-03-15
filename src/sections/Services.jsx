const Services = () => {
  return (
    <div className='my-10 max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-10'>
      <div className="flex gap-7 flex-col items-center justify-center text-center">
        <h1 className='text-4xl font-bold'>Commercial Renovation Services:
          Enhancing Your Business
          Space</h1>
        <p className='leading-10 text-2xl'>At <span className='text-orange-600'>Hiline</span>, we understand the importance of a well-designed
          and functional commercial space. Your business
          environment plays a vital role in creating a positive
          impression on clients and employees alike. Our
          comprehensive commercial renovation services are
          tailored to meet the unique needs of your business,
          whether you own a retail store, restaurant, hotel, or any
          other commercial establishment.</p>
      </div>
      <div>
        <img src="/img3.png" alt="services" className='object-cover h-full w-full rounded-xl' />
      </div>
    </div>
  )
}

export default Services