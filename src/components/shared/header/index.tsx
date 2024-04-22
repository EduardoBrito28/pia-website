import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png' 
import Container from '../container';

export default function Header() {
	const { pathname } = useLocation();
	return (
		<div className='flex items-center justify-center'>
			<Container>
				<div className='w-full flex justify-between items-center h-20 sticky '>
					<div>
						<Link to='/'>
							<img src={logo} alt='logo' className='h-[80px]' />
						</Link>
					</div>
					<div className='flex flex-row items-center'>
						<ul className='flex flex-row gap-2'>
							<li className='p-3 text-base cursor-pointer list-none' style={pathname === "/universidade" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/universidade'>Universidades</Link></li>

							<li className='p-3 text-base cursor-pointer list-none' style={pathname === "/schools" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/schools'>Colégios</Link></li>

							<li className='p-3 text-base cursor-pointer list-none' style={pathname === "/price" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/price'>Preços</Link></li>
							<li className='p-3 text-base cursor-pointer list-none' style={pathname === "/price" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/service'>Serviços</Link></li>

							<li className='p-3 text-base cursor-pointer list-none' style={pathname === "/access" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/access'>Entrar</Link></li>

							<li className='p-3 text-base cursor-pointer list-none bg-[#7745FF] rounded-sm' style={pathname === "" ? {
							} : {}}> <Link className='cursor-pointer text-white z-50' to='/signup/1'>Cadastrar-se</Link></li>
						</ul>
					</div>
				</div>
			</Container>
		</div>

	);
};