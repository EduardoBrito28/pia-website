/*******************************************teaching imag  */
import reguaImage from '../../../../components/assets/img-regua.png';
import teachBase from '../../../../components/assets/img-ensino-basico.png';
import teachMidia from '../../../../components/assets/img-ensino-superior.png';
import teachSuper from '../../../../components/assets/img-ensino-basico.png';
import Container from '../../../shared/container';

export default function Teaching() {
    return (
        <div className='flex items-center justify-center'>
            <Container>
                <section className='w-full flex flex-col justify-center items-center h-auto'>

                    <div className='text-center p-10'>
                        <h2 className='text-[2em] text-white'>Pagamentos Instituicional Angolano</h2>
                        <h3 className='text-[1em] text-[#B6CDCF] pt-[10px]'>Independentemente do Seu Nivel Académico</h3>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>

                        <div className='w-full flex flex-row justify-between items-center px-40 text-[#B6CDCF] text-center'>

                            <div>
                                <img src={teachBase} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Básico</h3>
                                </div>
                            </div>

                            <div>
                                <img src={teachMidia} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Médio</h3>
                                </div>
                            </div>

                            <div>
                                <img src={teachSuper} />
                                <div>
                                    <span>Ensino</span>
                                    <h3 className='text-[2em] text-[#B6CDCF]'>Superior</h3>
                                </div>
                            </div>

                        </div>
                        <div className='W-full text-[#B6CDCF] py-10 text-center'>
                            <p className='text-[15px]'>Pague suas de matrículas, uniforme, cartões de estudate, equipamentos laboratórias e todos os serviçõs sem sair de casa ou da sua zona de conforto.</p>
                        </div>
                    </div>

                </section>
            </Container>
        </div>
    )
}