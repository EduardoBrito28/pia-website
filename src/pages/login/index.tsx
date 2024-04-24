import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/header';

const UserLogin = () => {
    const [typeUser, setTypeUser] = useState("1");
    return (
        <div className='flex flex-col linear-background'>
            <Header/>
            <div className='flex items-center justify-center flex-col relative h-[100vh] '>
                <div className="py-[100px] px-10 bg-white shadow-md rounded-md flex flex-col items-center flex-wrap">
                    <section className='absolute top-[100px] left-0 right-0 flex justify-center flex-col items-center'>
                        <div className='text-white text-2xl'>Escolha o acesso clicando no circulo a baixo</div>
                        <div className="flex justify-center p-2">
                            <div className="bg-[#002849] h-5 w-5 rounded-[50%] flex justify-center items-center my-0 mx-1 cursor-pointer" onClick={() => setTypeUser("1")}>
                                <div className="bg-white h-2 w-2 rounded-[50%] absolute" style={{ background: typeUser === '1' ? '#002849' : "#fff" }}>
                                </div>
                            </div>
                            <div className="bg-[#002849] h-5 w-5 rounded-[50%] flex justify-center items-center my-0 mx-1 cursor-pointer" onClick={() => setTypeUser("2")}>
                                <div className="bg-white h-2 w-2 rounded-[50%] absolute" style={{ background: typeUser === '2' ? '#002849' : "#fff" }}>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="text-center w-full p-5 rounded-2xl text-[#141414]">
                        <h3>Identificação de acesso do/a {typeUser === '1' ? "estudante" : "encarregdo"}</h3>
                    </div>
                    <form>
                        {
                            typeUser === "1" ?
                                <>
                                    <div>
                                        <label>Número de estudante</label>
                                        <input className='w-full p-3 border border-[#002849] rounded-sm text-[10pt] focus:outline-none focus:border focus:border-[#002849] opacity-50 transition-[2s]' type="text" placeholder="Insíra o Seu Número de Estudante" />
                                    </div>
                                    <div>
                                        <label>Senha de acesso</label>
                                        <input className='w-full p-3 border border-[#002849] rounded-sm text-[10pt] focus:outline-none focus:border focus:border-[#002849] opacity-50 transition-[2s]' type="password" placeholder="Digite a sua senha" />
                                    </div>
                                </> : null
                        }
                        {
                            typeUser === "2" ?
                                <>
                                    <div>
                                        <label>Número de telefone ou email</label>
                                        <input className='w-full p-3 border border-[#002849] rounded-sm text-[10pt] focus:outline-none focus:border focus:border-[#002849] opacity-50 transition-[2s]' type="text" placeholder="Insira o Seu Número de Telefone" />
                                    </div>
                                    <div>
                                        <label>Senha de acesso</label>
                                        <input className='w-full p-3 border border-[#002849] rounded-sm text-[10pt] focus:outline-none focus:border focus:border-[#002849] opacity-50 transition-[2s]' type="password" placeholder="Digite a sua senha" />
                                    </div>
                                </> : null
                        }
                        <div className='flex items-center p-3'>
                            <Link className='text-[#7745ff] text-center' to="/forgetpassword">Esqueceu a sua palavra pass?</Link>
                        </div>
                        <div className="flex flex-col items-center text-center text-xs">
                            <button className='bg-[#7745FF] px-10 py-3 text-white rounded-lg mt-[50px]'>
                                <Link className='' to="/signup/1">Acessar</Link>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default UserLogin;
