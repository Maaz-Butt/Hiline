import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <div className='mt-10 p-5 max-w-8xl bg-gray-900 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5' >
                <div className='bg-gray-800 text-center py-36 rounded-xl' >
                    <h1 className='my-3 font-bold text-4xl text-white'>HILINE</h1>
                    <p className='mt-10 text-white text-sm'>Need some great designs?</p>
                    <button className='my-3 border p-2.5 font-semibold rounded-lg text-sm text-white hover:bg-white hover:text-black'>GET STARTED</button>
                </div>
                <div className='bg-gray-800 grid lg:grid-rows-3 md:grid-rows-2 sm:grid-rows-1 rounded-xl' >
                    <div className='p-5'>
                        <h1 className='font-bold text-white'>Get In Touch</h1>
                        <p className='font-semibold text-gray-100 mt-2'>Hiline International Pvt. Ltd.</p>
                        <p className='text-gray-200 text-sm'>contact@hiline.pk</p>
                        <p className='text-gray-200 text-sm'>04236408572</p>
                        <p className='text-gray-200 text-sm'>0300 8424644</p>
                    </div>

                    <div className='p-5'>
                        <h1 className='font-bold text-white'>Lahore</h1>
                        <p className='text-gray-200 text-sm'>1st Floor. 27 K, Sir Syed Rd</p>
                        <p className='text-gray-200 text-sm'>Block K - Gulberg 2</p>
                        <p className='text-gray-200 text-sm'>Lahore 54000</p>
                    </div>

                    <div className='p-5'>
                        <h1 className='font-bold text-white'>Vancouver</h1>
                        <p className='text-gray-200 text-sm'>170 - 422 Richards St</p>
                        <p className='text-gray-200 text-sm'>Vancouver, BC</p>
                        <p className='text-gray-200 text-sm'>Canada V6B 2Z4</p>
                    </div>
                </div>
                <div className='bg-gray-800 p-5 rounded-xl' >
                    <h1 className='font-bold text-white'>Hiline</h1>
                    <p className='text-gray-200 text-sm mt-5 leading-loose'>Home</p>
                    <p className='text-gray-200 text-sm leading-loose'>About</p>
                    <p className='text-gray-200 text-sm leading-loose'>Services</p>
                    <p className='text-gray-200 text-sm leading-loose'>Projects</p>
                    <p className='text-gray-200 text-sm leading-loose'>Career</p>
                    <p className='text-gray-200 text-sm leading-loose'>Contact</p>
                    <p className='text-gray-200 text-sm leading-loose'>Blog</p>
                    <p className='text-gray-200 text-sm leading-loose'>Send Design Brief</p>
                    <p className='text-gray-200 text-sm leading-loose'>Our Design Process</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-xl' >
                    <h1 className='font-bold text-white'>What We Do?</h1>
                    <p className='text-gray-200 text-sm mt-5 leading-loose'>Interior Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Landscape Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Industrial Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Retail Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Renovation</p>
                    <p className='text-gray-200 text-sm leading-loose'>PMC</p>
                    <p className='text-gray-200 text-sm leading-loose'>Trade Show Booth Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Sciography</p>
                    <p className='text-gray-200 text-sm leading-loose'>3D Visualization</p>
                    <p className='text-gray-200 text-sm leading-loose'>Cafe Interior</p>
                    <p className='text-gray-200 text-sm leading-loose'>Resturant Interior Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Fast Food Interior Design</p>
                    <p className='text-gray-200 text-sm leading-loose'>Office Interior Design</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-xl flex flex-col justify-center items-center gap-8 text-white' >
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                    <XIcon />
                    <YouTubeIcon />
                </div>
            </div>
            <div className='max-w-8xl bg-gray-900 text-sm p-5 text-white text-center' >
                <h1>Worldwide © 2011 - 2024 Hiline International (Pvt.) Ltd | All Rights Reserved | Web developed and designed by Maaz</h1>
            </div>
        </>
    )
}

export default Footer