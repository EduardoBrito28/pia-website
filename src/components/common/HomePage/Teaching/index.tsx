/*******************************************teaching imag  */
import teachBase from '../../../../components/assets/img-ensino-basico.png';
import teachMidia from '../../../../components/assets/img-ensino-superior.png';
import teachSuper from '../../../../components/assets/img-ensino-basico.png';
import Container from '../../../shared/container';

export default function Teaching() {
    return (
        <div className='flex items-center justify-center pt-20'>
            <Container>
                <section className='w-full flex flex-col justify-start items-center h-auto'>

                    <div className='w-full '>
                        <div className='text-start border-l-4 border-black pl-3'>
                            <h2 className='text-[2em] text-[#00A3E6]'>Pagamentos Instituicional Angolano</h2>
                            <h3 className='text-[1em] text-gray-700'>Independentemente Do Nivel Académico</h3>
                        </div>
                        <p className='text-[15px] pt-4'>Pague suas de matrículas, uniforme, cartões de estudante, equipamentos laboratórias e todos os serviçõs sem sair de casa ou da sua zona de conforto.</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='w-full flex flex-row justify-between items-center px-40 pt-10 text-gray-800 text-center'>

                            <div>
                                <img src={teachBase} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-gray-600'>Básico</h3>
                                </div>
                            </div>

                            <div>
                                <img src={teachMidia} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-gray-600'>Médio</h3>
                                </div>
                            </div>

                            <div>
                                <img src={teachSuper} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-gray-600'>Superior</h3>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>
            </Container>
        </div>
    )
}