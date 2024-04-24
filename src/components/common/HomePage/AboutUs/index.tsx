import { Link } from 'react-router-dom'
import aboutImage from '../../../assets/HomeImages/payment.jpg'

export function AboutUs() {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-40 py-32">
            <div className='w-[550px]'>
                <img src={aboutImage} alt="Sobre Nós" className='w-full' />
            </div>
            <div className='w-[600px] flex flex-col gap-10 items-center justify-start'>
                <h1 className='text-3xl '>We are no. 1 internet service provider company in United States.</h1>
                <p className='text-base text-gray-500'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                <div className='w-full items-start justify-start'>
                    <Link to={``} className='py-3 px-5 rounded-sm bg-[#0099D8] text-white'>Saiba Mais</Link>
                </div>
            </div>
        </div>
    )
}