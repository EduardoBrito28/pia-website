import { Link } from 'react-router-dom';

export default function HomeBanner() {
    return (
        <div className="w-full h-[100vh] relative">
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70'></div>
            <video className='w-full h-full object-cover' src={`./assets/Home-banner/Earth-Animation.mp4`} autoPlay loop muted></video>
            <div className='absolute mt-24 w-full h-full text-center top-0 flex flex-col justify-center items-center text-white'>
                <h1 data-aos="zoom-in" className='w-[700px]'>P.I.A. O sistema que visa melhorar a forma de pagamento do sistema de ensino angolano</h1>
                <div data-aos-delay="200" data-aos="zoom-in" className='flex items-center justify-around pt-5'>
                    <div className="flex items-center gap-8 text-3xl text-white">
                        <a href="https://www.youtube.com/watch?v=a" className="play-btn mb-3 text-1xl"></a>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-around gap-10 pt-10'>
                    <Link data-aos-delay="400" data-aos="zoom-in" to={``} className='py-4 px-12 rounded-sm text-white text-lg border border-[#00A3E6] bg-[#00A3E6]'>Saiba Mais</Link>
                    <Link data-aos-delay="600" data-aos="zoom-in" to={``} className='py-4 px-10 rounded-sm text-white text-lg border border-white hover:bg-white hover:text-[#00A3E6] duration-500'>Contacte-nos</Link>
                </div>
            </div>
        </div>
    )
}