/***************colegios */
import cm1 from '../../../../components/assets/escolas/cat.jpg';
import cm2 from '../../../../components/assets/escolas/osbrilhates.png';
import cm3 from '../../../../components/assets/escolas/martires.png';
import cm4 from '../../../../components/assets/escolas/girasol.png';

/***************universidades */
import um1 from '../../../../components/assets/escolas/catolica.jpg';
import um2 from '../../../../components/assets/escolas/imetro.png';
import um3 from '../../../../components/assets/escolas/isptec.png';
import um4 from '../../../../components/assets/escolas/oscaricas.png';
import um5 from '../../../../components/assets/escolas/unibelas.png';

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
                                <img className='rounded-[50%] p-3' src={cm1} alt="colegio 1" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={cm2} alt="colegio 2" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={cm3} alt="colegio 3" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={cm4} alt="colegio 4" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={um1} alt="universidade 1" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={um2} alt="universidade 2" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={um3} alt="universidade 3" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={um4} alt="universidade 4" />
                            </div>
                            <div className='slide'>
                                <img className='rounded-[50%] p-3' src={um5} alt="universidade 5" />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}