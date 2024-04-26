import { Link } from 'react-router-dom';
import logo from '../../components/assets/logo-sticky.png'
import { MdOutlineClose } from "react-icons/md";

export default function GetStarted() { 
    return (
        <div className="w-full h-[100vh] flex flex-col items-start justify-start bg-gradient-to-r from-[#FDF8EA] to-[#ECF0EE] py-2 px-40">
            <div className="w-full flex items-center justify-between ">
                <img src={logo} alt="Logomarca" className='w-[150px]' />
                <Link to={`/`} className='flex gap-2 items-center'>
                    <p>Fechar</p>
                    <MdOutlineClose className='text-xl' />
                </Link>
            </div>
            <div className='flex flex-row items-center justify-between h-full w-full'>
                <div className='flex mt-[-150px] flex-col items-start justify-center gap-5 text-start h-full'>
                    <h1 className='text-[86px]'>Let's get started</h1>
                    <p className='text-[32px] text-start'>Tell us about your business.</p>
                </div>
                <div className='h-full pt-20'>
                    <div className='get-started-grid'>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer mt-[60px] rounded-md bg-white'>
                            <input type="radio" name="business" id="medio" className='text-3xl w-5 h-5' />
                            <label className='h-full flex items-center text-lg font-semibold' htmlFor="">Instituição de Ensino Médio</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer rounded-md bg-white'>
                            <input type="radio" name="business" id="" className='text-3xl w-5 h-5' />
                            <label className='h-full flex items-center text-lg font-semibold' htmlFor="">Encarregado de Educação</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer rounded-md bg-white'>
                            <input type="radio" name="business" id="" className='text-3xl w-5 h-5' />
                            <label className='h-full flex items-center text-lg font-semibold' htmlFor="">Instituição de Ensino Superior</label>
                        </div>
                        <div className='w-[300px] h-[300px] flex flex-col items-start justify-start p-7 text-start hover:shadow-lg duration-700 cursor-pointer mt-[-60px] rounded-md bg-white'>
                            <input type="radio" name="business" id="" className='text-3xl w-5 h-5' />
                            <label className='h-full flex items-center text-lg font-semibold' htmlFor="">Estudante</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}