import Container from "../../../shared/container"
import Header from '../../../shared/header'
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="linear-background">
            <Header/>
            <div className=" flex items-center justify-center ">
                <Container>
                    <div className='flex items-center flex-col h-[100vh]'>
                        <header className='w-[90%] flex items-center flex-col justify-center m-auto'>
                            <div className='flex justify-center items-center flex-col gap-3'>
                                <div className='py-5'>
                                    <Link to={`#`}><span className='bg-white rounded-sm py-2 px-4 text-green-700 uppercase'>Plataforma</span></Link>
                                </div>
                                <div className='  flex justify-center items-center flex-col'>
                                    <h1 className='text-center text-white'>Agora já podes fazer os seus pagamentos a partir do seu computador ou dispositivo móvel, sem se locomover ao colégio, universidade e muito menos ao banco.</h1>
                                    <div className='p-3'>
                                        <h4 className='text-slate-300 border-b px-1 '>É mais simples, fácil e seguro</h4>
                                    </div>
                                </div>
                                <div className='px-[30px] mt-7'>
                                    <button className='bg-[#7745FF] rounded-sm py-[15px] px-5 outline-none text-white border-none'>CADASTRE-SE GRATUITAMENTE</button>
                                    <button className='m-5 bg-white text-[#7745FF] rounded-sm py-[15px] px-5 outline-none border-none uppercase'>DÊ UMA OLHADA NOS NOSSOS PLANOS </button>
                                </div>
                            </div>
                        </header>
                    </div>
                </Container>
            </div>
        </div>
    )
}