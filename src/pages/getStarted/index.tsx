import { Link } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import { ChangeEvent, useState } from 'react';

export default function GetStarted() { 

    const [idUser, setidUser] = useState<number>(0);
    const dt = new Date();
    const x = dt.getTime();
    const checked = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            const id = parseInt(e.target.value);
            setidUser(id)
        }
    };

    

    return (
        <div className="w-full h-[100vh] flex flex-col items-start justify-start bg-gradient-to-r from-[#FDF8EA] to-[#ECF0EE] py-2 px-40">
            <div className="w-full flex items-center justify-between ">
                <img src='/assets/logo-sticky2.png' alt="Logomarca" className='w-[150px] ' />
                <Link to={`/`} className='flex gap-2 items-center'>
                    <p>Fechar</p>
                    <MdOutlineClose className='text-xl' />
                </Link>
            </div>
            <div className='flex flex-row items-center justify-between h-full w-full'>
                <div className='flex mt-[-150px] flex-col items-start justify-center gap-5 text-start h-full'>
                    <h1 className='text-[86px]'>Vamos começar</h1> 
                    <p className='text-[32px] text-start'>Conte-nos sobre o seu negócio.</p>
                </div>
                <div className='h-full '>
                    <div className='get-started-grid'>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer mt-[60px] rounded-md bg-white'>
                            <input value={2} onChange={checked} type="radio" name="business" id="medio" className='text-3xl h-5 w-5' />
                            <label className='h-full w-full cursor-pointer flex items-center text-lg font-semibold' htmlFor="medio">Instituição de Ensino Médio</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer rounded-md bg-white'>
                            <input value={6} onChange={checked} type="radio" name="business" id="encarregado" className='text-3xl h-5 w-5' />
                            <label className='h-full w-full cursor-pointer flex items-center text-lg font-semibold' htmlFor="encarregado">Encarregado de Educação</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer rounded-md bg-white'>
                            <input value={1} onChange={checked} type="radio" name="business" id="superior" className='text-3xl h-5 w-5' />
                            <label className='h-full w-full cursor-pointer flex items-center text-lg font-semibold' htmlFor="superior">Instituição de Ensino Superior</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer mt-[-60px] rounded-md bg-white'>
                            <input value={7} onChange={checked} type="radio" name="business" id="estudante" className='text-3xl h-5 w-5' />
                            <label className='h-full w-full cursor-pointer flex items-center text-lg font-semibold' htmlFor="estudante">Estudante do Ensino Médio ou Superior</label>
                        </div>
                    </div>
                    <div className='w-full py-5 flex items-center justify-end'>
                        <Link to={idUser === 1 ? `/sigup/${x * 100}${idUser}` : idUser === 2 ? `/sigup/${x * 100}${idUser}` : `/signup/${idUser}`} className='py-3 px-10 bg-[#00A3E6] rounded-md text-white text-lg font-semibold '>Avançar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}