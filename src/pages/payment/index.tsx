import Hero from '../../components/common/PaymentPage/Hero';
import Instituitions from '../../components/common/PaymentPage/Instituitions';
import Teaching from '../../components/common/PaymentPage/Teaching';
import Solution from '../../components/common/PaymentPage/Solution';


export default function PaymentPage() {
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

