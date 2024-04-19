import Hero from '../../components/common/HomePage/Hero';
import Instituitions from '../../components/common/HomePage/Instituitions';
import Teaching from '../../components/common/HomePage/Teaching';
import Solution from '../../components/common/HomePage/Solution';


export default function HomePage() {
    return (
        <div>
            <Hero />
            <div className='flex flex-col justify-center'>
                <div className='w-full bg-gray-100'>
                    <Instituitions />
                </div>
                <div className='w-full py-10 '>
                    <Teaching />
                </div>
                <div className='w-full py-10 '>
                    <Solution />
                </div>
            </div>
        </div>

    )
}

