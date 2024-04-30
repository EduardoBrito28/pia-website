import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/shared/header';

export default function Register() {
    const page = useParams();

    const [typeUser, setTypeUser] = useState("encarregado");
    return (
        <div className='flex flex-col linear-background'>
            <Header />
            <div className='flex items-center justify-center flex-col relative h-[100vh]'>
                <div className=" py-32 px-20 bg-white shadow-3xl rounded-xl relative">
                    <div className='absolute top-[5%] left-0 right-0 flex justify-center flex-col items-center'>
                        <div className="flex justify-center p-2">
                            <div className="bg-[#7745FF] h-5 w-5 rounded-[50%] flex justify-center items-center my-0 mx-[5px] cursor-pointer">
                                <div className="bg-white h-2 w-2 rounded-[50%] absolute" style={{ background: page?.id === '1' ? '#7745FF' : "#fff" }}>
                                </div>
                            </div>
                            <div className="bg-[#7745FF] h-5 w-5 rounded-[50%] flex justify-center items-center my-0 mx-[5px] cursor-pointer">
                                <div className="bg-white h-2 w-2 rounded-[50%] absolute" style={{ background: page?.id !== '1' && page.id === '2' || page.id === '3' ? '#7745FF' : "#fff" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {page?.id === '1' ?
                        <>
                            <div className="text-center w-full bg-white rounded-[20px]">
                                <h3 className='text-xl text-gray-800 pb-5'>Você é?</h3>
                            </div>
                            <div className="w-full mt-5 flex justify-between">
                                <div className={`flex-1 rounded-[20px] flex flex-col items-center text-center text-[12pt] font-extralight cursor-pointer  ${typeUser === 'estudante' ? 'bg-[#7745FF] p-5 border' : ' bg-white p-5 border border-[#7745FF]'} `} onClick={() => {
                                    setTypeUser("estudante");
                                    localStorage.setItem("usertype", "estudante");
                                }}>
                                    <h3 className={` text-[15pt] pb-1 ${typeUser === 'estudante' ? 'text-white' : 'text-[#7745FF]'}`}>Estudante </h3>
                                    <h5 className={` ${typeUser === 'estudante' ? 'text-white' : 'text-[#7745FF]'} `}>Universitário & Ensino Médio</h5>
                                </div>
                                <div className={`ml-[30px] border border-[#7745FF] flex-1 rounded-[20px] flex flex-col items-center justify-center text-center text-[12pt] font-extralight cursor-pointer ${typeUser === 'encarregado' ? 'bg-[#7745FF] p-5 border' : 'bg-white p-5 border border-[#7745FF]'}`} onClick={() => {
                                    setTypeUser("encarregado");
                                    localStorage.setItem("usertype", "encarregado");
                                }}>
                                    <h3 className={`text-[15pt] pb-1  text-center ${typeUser === 'encarregado' ? 'text-white' : 'text-[#7745FF]'}`}>Encarregado de Educação</h3>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center font-extralight cursor-pointer ">
                                <button className='bg-[#7745FF] w-[30%] outline-none rounded-lg text-white border-0 px-4 py-3 absolute bottom-[50px] text-[12pt]'><Link to={`/signup/${typeUser === "encarregado" ? '2' : '3'}`}> Avançar</Link> </button>
                            </div>
                        </>
                        : null
                    }
                    {page?.id === '6' ?
                        <>
                            <div className="text-center w-full bg-white p-5 rounded-[20px]">
                                <h3>Solicitação de conta de {typeUser}</h3>
                            </div>
                            <form className='flex flex-col text-left w-full m-auto'>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Primeiro e último nome</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o nome da sua estituição" />
                                </div>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>E-email</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o seu número de estudante" />
                                </div>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Número de telefone</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o seu número de telefone" />
                                </div>
                                <div className="flex-1 py-0 px-5 flex flex-col items-center text-center text-[12pt] font-extralight cursor-pointer ">
                                    <button className='bg-[#7745FF] w-[30%] outline-none rounded-lg text-white border-0 px-4 py-3 absolute bottom-[50px]'>Solicitar</button>
                                </div>
                                <div className='flex items-center p-2 '>
                                    <Link className='text-[#7745FF] text-center' to="/access">Já tenho acesso</Link>
                                </div>
                            </form >
                        </>
                        : null
                    }
                    {page?.id === '7' ?
                        <>
                            <div className="text-center w-full bg-white p-5 rounded-[20px]">
                                <h3>Solicitação de conta de {typeUser}</h3>
                            </div>
                            <div className='flex flex-col text-left w-full m-auto'>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Instituição escolar</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o nome da sua estituição" />
                                </div>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Número de estudate</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o seu número de estudante" />
                                </div>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Número do bilhete de identidade</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o seu número de identidade" />
                                </div>
                                <div className='flex items-start flex-col justify-start text-left py-1 px-0 w-full'>
                                    <label>Número de telefone</label>
                                    <input className='w-full p-2 border border-[#7745FF] rounded-sm text-[10pt]' type="text" placeholder="Insira aqui o seu número de telefone" />
                                </div>
                                <div className='flex items-center p-2 '>
                                    <Link className='text-[#7745FF] text-center' to="/access">Já tenho acesso</Link>
                                </div>
                                <div className="flex-1 py-0 px-5 flex flex-col items-center text-center text-[12pt] font-extralight cursor-pointer ">
                                    <button className='bg-[#7745FF] w-[30%] outline-none rounded-lg text-white border-0 px-4 py-3 absolute bottom-[50px]'>Solicitar</button>
                                </div>
                            </div>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}