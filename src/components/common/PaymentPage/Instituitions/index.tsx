import Container from '../../../shared/container';

export default function Instituitions() {
    return (
        <div className='flex items-center justify-center'>
            <Container>
                <section className='flex flex-row justify-between px-3 py-10'>
                    <div className='slider gap-10'>
                        <div className='w-full text-center'>
                            <h3 className='w-full text-2xl uppercase text-gray-800'>Identifique a Instituição a Qual Pertence</h3>
                        </div>
                        <div className='slide-track '>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/cat.jpg' alt="colegio 1" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/osbrilhates.png' alt="colegio 2" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/martires.png' alt="colegio 3" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/girasol.png' alt="colegio 4" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/catolica.jpg' alt="universidade 1" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/imetro.png' alt="universidade 2" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/isptec.png' alt="universidade 3" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/oscaricas.png' alt="universidade 4" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src='/assets/escolas/unibelas.png' alt="universidade 5" />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}