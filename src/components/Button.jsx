const Button = (props) => {

  const title = props.title

  return (
    <div className='py-3 w-full text-center bg-gray-900 cursor-pointer text-white text-lg rounded-xl hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' >{title}</div>
  )
}

export default Button