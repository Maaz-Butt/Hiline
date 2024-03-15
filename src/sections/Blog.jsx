import Card from '../components/Card'

const Blog = () => {
  return (
    <div className='max-w-8xl mx-auto mt-10 p-10'>
      <h1 className='font-semibold text-lg'>Recent Blog Posts:</h1>

      <div className='max-w-7xl mx-auto mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5' >
        <Card title='Weekend Plan: Bowling at Uptown LA' details='Lorem ipsum dolor sit amet consntur blanditiis voluptas, consectetur excepturi sapiente!' img='/img6.png' />
        <Card title='Hiline celebrates independence day of Pakistan' details='Lorem it amet consectetur, adipisicing elit. Dignissimos, ipsam officiis molestias dolore dolores temporibus a consequuntur blanditiis voluptas, consectetur excepturi sapiente!' img='/img7.png' />
        <Card title='Photoshot at Hiline international' details='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, id consectetur. Earum saepe modi ratione obcaecati, corrupti ipsam officis' img='img8.png' />
      </div>
    </div>
  )
}

export default Blog