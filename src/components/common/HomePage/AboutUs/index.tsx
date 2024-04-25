import { Link } from 'react-router-dom'
import aboutImage from '../../../assets/HomeImages/payment.jpg'

export function AboutUs() {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-40 py-32">
            <div className='w-[550px]'>
                <img src={aboutImage} alt="Sobre Nós" className='w-full' />
            </div>
            <div className='w-[600px] flex flex-col gap-4 items-center justify-start'>
                <h1 className='text-3xl '>Junte-se à PIA hoje e simplifique seus processos de pagamento.</h1>
                <p className='text-base text-gray-500 mt-5'>Bem-vindo à PIA - Pagamentos Institucionais Angolano, a solução abrangente para facilitar e simplificar os processos de pagamento para instituições educacionais em Angola. Na PIA, estamos comprometidos em fornecer uma plataforma segura e eficiente para universidades e colégios gerenciarem seus recebimentos de mensalidades dos alunos e encarregados de educação.</p>
                <p className='text-base text-gray-500'>Nossa plataforma intuitiva e fácil de usar permite que as instituições se cadastrem facilmente e comecem a receber pagamentos de forma rápida e sem complicações. Com a PIA, você pode dizer adeus aos problemas de cobrança e administrar os pagamentos de mensalidades de forma transparente e eficaz.</p>
                <div className='w-full items-start justify-start mt-8'>
                    <Link to={``} className='py-3 px-5 rounded-sm bg-[#0099D8] text-white'>Saiba Mais</Link>
                </div>
            </div>
        </div>
    )
}