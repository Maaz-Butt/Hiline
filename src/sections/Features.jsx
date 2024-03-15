import Button from '../components/Button'

const Features = () => {
  return (
    <div className='lg:max-w-7xl m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-10 my-10'>
      <Button title="Send Design Brief" />
      <Button title="View Our Simple Design Process" />
      <Button title="View Our Projects" />
    </div>
  )
}

export default Features