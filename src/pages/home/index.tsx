import { Fragment } from 'react';

import Header from '../../components/common/HomePage/Header';
import Instituitions from '../../components/common/HomePage/Instituitions';
import Teaching from '../../components/common/HomePage/Teaching';
import Solution from '../../components/common/HomePage/Solution';


export default function HomePage() {
    return (
        <div>
            <Header />
            <div className='flex flex-col justify-center'>
                <div className='w-full bg-[#082537]'>
                    <Instituitions />
                </div>
                <div className='w-full py-10 bg-[#104B71]'>
                    <Teaching />
                </div>
                <div className='w-full py-10 bg-[#082537]'>
                    <Solution />
                </div>

            </div>
        </div>

    )
}

