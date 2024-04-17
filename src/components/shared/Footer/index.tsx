import { Link } from 'react-router-dom';
import Container from '../container';


export default function Footer() {
  return (
    <div className='flex items-center justify-center'>
      <Container>
        <div className="w-full flex items-center flex-row justify-between py-[30px] px-[80px] flex-wrap">

          <div className="w-[250px] h-[300px] flex justify-center items-center p-[10px]">
            <div style={{ color: '#fff' }}>
              <h1 className='mb-[20px] text-[#B6CDCF]'>PIA</h1>
              <p className='text-base font-light'>Pagamentos Istituicional Angolano é um sistema que visa melhorar a forma de pagamento do sistema de ensino escolar angolano, simplificando a vida de cada cidadão no processo de pagamento de propínas.</p>
            </div>
          </div>

          <div className="w-[250px] h-[300px] flex justify-center items-center p-[10px]">
            <div style={{ color: '#fff' }}>
              <h2 className='mb-5 text-[#B6CDCF]'>Parceiros</h2>
              <ul className='list-none no-underline'>
                <li className='mb-1'> <Link to='/'>Unitel </Link></li>
                <li className='mb-1'> <Link to='/'>Movicel </Link></li>
                <li className='mb-1'> <Link to='/'>TV Cabo </Link></li>
                <li className='mb-1'> <Link to='/'>Zap </Link></li>
              </ul>
            </div>
          </div>

          <div className="w-[250px] h-[300px] flex justify-center items-center p-[10px]">
            <div style={{ color: '#fff' }}>
              <h2 className='mb-5 text-[#B6CDCF]'>Parceiros bancário</h2>
              <ul className='list-none no-underline'>
                <li className='mb-1'> <Link to='/'>Banco Fomento Angola   </Link></li>
                <li className='mb-1'> <Link to='/'>Banco Millenium Atlantico  </Link></li>
                <li className='mb-1'> <Link to='/'>Banco de Poupança e Crédito  </Link></li>
                <li className='mb-1'> <Link to='/'>Banco Sol </Link></li>
              </ul>
            </div>
          </div>

          <div className="w-[250px] h-[300px] flex justify-center items-center p-[10px]">
            <div style={{ color: '#fff' }}>
              <h2 className='mb-5 text-[#B6CDCF]'>Descobrir</h2>
              <ul className='list-none no-underline'>
                <li className='mb-1'>  <Link to='/'>Polítcas de Uso </Link></li>
                <li className='mb-1'>  <Link to='/'>Termos e Condições </Link></li>
                <li className='mb-1'>  <Link to='/'>Discução </Link></li>
                <li className='mb-1'>  <Link to='/'>Políticas </Link></li>
              </ul>
            </div>
          </div>

          <div className="w-[250px] h-[300px] flex justify-center items-center p-[10px]">
            <div style={{ color: '#fff' }}>
              <h2 className='mb-5 text-[#B6CDCF]'>Contactos</h2>
              <ul className='list-none no-underline'>
                <li className='mb-1'>  <Link to='/'>EF19, LUANDA BENFICA, AO </Link></li>
                <li className='mb-1'>  <Link to='/'>(+244) 934-001-880 </Link></li>
                <li className='mb-1'>  <Link to='/'>(+244) 994-739-494 </Link></li>
                <li className='mb-1'>  <Link to='/'>info@pco.co.ao </Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center text-white text-base py-2">
          <p className='w-full flex items-center justify-center'>&copy; P.I.A. 2024 - Todos Os Direitos Reservados</p>
        </div>
      </Container>
    </div>
  );
}