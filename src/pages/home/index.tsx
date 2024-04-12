import { Fragment } from 'react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';

/***************colegios */
import cm1 from '../../components/assets/escolas/cat.jpg';
import cm2 from '../../components/assets/escolas/osbrilhates.png';
import cm3 from '../../components/assets/escolas/martires.png';
import cm4 from '../../components/assets/escolas/girasol.png';
import cm5 from '../../components/assets/escolas/monatower.png';

/***************universidades */
import um1 from '../../components/assets/escolas/catolica.jpg';
import um2 from '../../components/assets/escolas/imetro.png';
import um3 from '../../components/assets/escolas/isptec.png';
import um4 from '../../components/assets/escolas/oscaricas.png';
import um5 from '../../components/assets/escolas/unibelas.png';

/*******************************************teaching imag  */
import reguaImage from '../../components/assets/img-regua.png';
import teachBase from '../../components/assets/img-ensino-basico.png';
import teachMidia from '../../components/assets/img-ensino-superior.png';
import teachSuper from '../../components/assets/img-ensino-basico.png';

import ilust from '../../components/assets/ilust.png';
import exemple from '../../components/assets/exemple.png';

import { Link } from 'react-router-dom';


export default function HomePage() {
    return (
        <Fragment>
            <div className='flex items-center flex-col h-auto'>
                <header className='flex items-center flex-col justify-center m-auto'>
                    <div className='p-[100px] flex justify-center items-center flex-col'>
                        <div className='py-5'>
                            <span className='bg-white rounded-md py-1 px-3 text-green-700 cursor-pointer'>Patraforma</span>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-center text-white'>Agora já podes fazer os seus pagamentos a partir do seu computador ou dispositivo móvel, sem se locomover ao colégio, universidade e muito menos ao banco.</h1>
                            <div className='p-3'>
                                <h4 className='text-[#9EA8CA]'>É mais simples, fácil e seguro</h4>
                            </div>
                        </div>
                        <div className='px-[30px]'>
                            <button className='bg-white rounded-lg py-[15px] px-5 outline-none text-white border-none'>CADASTRE-SE GRATUITAMENTE</button>
                            <button className='m-5 bg-[#7745FF] uppercase'>DE UMA OLHADA NOS NOSSOS PLANOS </button>
                        </div>
                    </div>
                </header>
            </div>

            <div className='flex flex-col justify-center'>
                <section className='flex flex-row justify-between p-3'>
                    <div className='w-[40%] flex items-center flex-col'>
                        <div>
                            <h3 className='text-white'>Identifica já abaixa a sua instituição</h3>
                        </div>
                        <div className='flex items-center justify-between w-[80%] h-[100px]'>
                            <div style={{ cursor: 'pointer' }}><AiOutlineLeftCircle size={30} color="#B6CDCF" /></div>
                            <li className='flex items-center object-cover'><Link to=''><img className='w-20 h-20 rounded-[50%] p-3' src={cm1} alt="colegio 1" /></Link></li>
                            <li className='flex items-center object-cover'><Link to=''><img className='w-20 h-20 rounded-[50%] p-3' src={cm2} alt="colegio 2" /></Link></li>
                            <li className='flex items-center object-cover'><Link to=''><img className='w-20 h-20 rounded-[50%] p-3' src={cm3} alt="colegio 3" /></Link></li>
                            <li className='flex items-center object-cover'><Link to=''><img className='w-20 h-20 rounded-[50%] p-3' src={cm4} alt="colegio 4" /></Link></li>
                            <li className='flex items-center object-cover'><Link to=''><img className='w-20 h-20 rounded-[50%] p-3' src={cm5} alt="colegio 5" /></Link></li>
                            <div style={{ cursor: 'pointer' }}><AiOutlineRightCircle size={30} color="#B6CDCF" /></div>
                        </div>
                    </div>
                    <div className='w-[40%] flex items-center flex-col'>
                        <div><h3>Identifica já abaixa a sua instituição</h3></div>
                        <div className='flex items-center  w-[80%] h-[100px]'>
                            <div style={{ cursor: 'pointer' }}><AiOutlineLeftCircle size={30} color="#B6CDCF" /></div>
                            <li className='flex items-center object-cover'> <Link to=''> <img className='w-20 h-20 rounded-[50%] p-3' src={um1} alt="universidade 1" /> </Link></li>
                            <li className='flex items-center object-cover'> <Link to=''> <img className='w-20 h-20 rounded-[50%] p-3' src={um2} alt="universidade 2" /> </Link></li>
                            <li className='flex items-center object-cover'> <Link to=''> <img className='w-20 h-20 rounded-[50%] p-3' src={um3} alt="universidade 3" /> </Link></li>
                            <li className='flex items-center object-cover'> <Link to=''> <img className='w-20 h-20 rounded-[50%] p-3' src={um4} alt="universidade 4" /> </Link></li>
                            <li className='flex items-center object-cover'> <Link to=''> <img className='w-20 h-20 rounded-[50%] p-3' src={um5} alt="universidade 5" /> </Link></li>
                            <div style={{ cursor: 'pointer' }}><AiOutlineRightCircle size={30} color="#B6CDCF" /></div>
                        </div>
                    </div>
                </section>

                <section className='w-full flex flex-col justify-center items-center h-auto'>
                    <div className='text-center p-10'>
                        <h2 className='text-[2em] text-white'>Pagamentos Instituicional Angolano</h2>
                        <h3 className='text-[1em] text-[#B6CDCF] pt-[10px]'>Independentemente do Seu Nivel Académico</h3>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center items-center p-[30px] text-[#B6CDCF] text-center'>
                            <div className='p-[30px]'>
                                <li className='list-none'><img src={teachBase} /></li>
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Básico</h3>
                                </div>
                            </div>
                            <div className='p-[30px]'>
                                <li className='list-none'><img src={teachMidia} /></li>
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Superior</h3>
                                </div>
                            </div>
                            <div className='p-[30px]'>
                                <li className='list-none'><img src={teachSuper} /></li>
                                <div>
                                    <span>continuidade</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Mestrado</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={reguaImage} />
                        </div>

                    </div>
                    <div className='W-[70% flex flex-col justify-center items-center pt-[30px] text-[#B6CDCF] text-center'>
                        <p className='text-[14px]'>Pague suas de matrículas, uniforme, cartões de estudate, equipamentos laboratórias e todos os serviçõs sem sair de casa ou da sua zona de conforto.</p>
                    </div>
                </section>

                <section className='w-full flex flex-col justify-center items-center h-auto'>
                    <div className='flex justify-between items-center px-20 text-[#B6CDCF]'>
                        <div className='flex-1 px-20'>
                            <p className='text-[14px]'>PIA atende por completo sua rotina dia, acadêmica, e financeira. Facilitando sua vida e sua instituição, podendo haver comunicação  com todo tipo de sistema que a sua instituição trabalha isso em todos os níveis de ensino. básico, superior e até a educação continuada e também ensinos a distância.</p>
                        </div>
                        <div className='flex-1 px-20'>
                            <img src={ilust} alt="ilustração" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-20 text-[#B6CDCF]'>
                        <div className='flex-1 px-20 order-2'>
                            <h3 className='text-[2em] text-[#B6CDCF] py-10'>Mobilidade, integração
                                e resultados</h3>
                            <p className='text-[14px]'>O pia é a solução de inovação conectada com as experiências que os usuários buscam hoje. Isso podendo ajudar os nossos usuários quanto menos esperam, em casa, trabalho, rua e em toda parte do mundo, basta ter um telemóvel ou um pc conectado a internet!</p>

                        </div>
                        <div className='flex-1 px-20 order-1 text-[#B6CDCF]'>
                            <img src={exemple} alt="inlustração" />
                        </div>
                    </div>
                </section>

            </div>
        </Fragment>

    )
}

