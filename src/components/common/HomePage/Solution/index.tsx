import ilust from '../../../../components/assets/ilust.png';
import exemple from '../../../../components/assets/exemple.png';
import Container from '../../../shared/container';

export default function Solution() {
    return (
        <div className='flex items-center justify-center'>
            <Container>
                <section className='w-full flex flex-col justify-center items-center h-auto'>
                    <div className='flex justify-between items-center px-20 text-[#B6CDCF]'>
                        <div className='flex-1 px-20 order-2'>
                            <h3 className='text-[2em] text-[#B6CDCF] py-10'>Mobilidade, integração e resultados</h3>
                            <div className='flex flex-col gap-5'>
                                <p className='text-[14px] text-justify'>O pia é a solução de inovação conectada com as experiências que os usuários buscam hoje. Isso podendo ajudar os nossos usuários quanto menos esperam, em casa, trabalho, rua e em toda parte do mundo, basta ter um telemóvel ou um pc conectado a internet!</p>
                                <p className='text-[14px] text-justify'>PIA atende por completo sua rotina dia, acadêmica, e financeira. Facilitando sua vida e sua instituição, podendo haver comunicação  com todo tipo de sistema que a sua instituição trabalha isso em todos os níveis de ensino. básico, superior e até a educação continuada e também ensinos a distância.</p>
                            </div>
                        </div>
                        <div className='flex-1 px-20 order-1 text-[#B6CDCF]'>
                            <img src={exemple} alt="inlustração" />
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}