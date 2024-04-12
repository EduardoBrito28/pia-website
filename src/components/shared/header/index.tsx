import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'

export default function Header() {
	const { pathname } = useLocation();
	return (
		<div className='w-full flex justify-between items-center h-[10vh] sticky p-10'>
			<div>
				<Link to='/'>
					<img src={logo} alt='logo' className='h-[80px]' />
				</Link>
			</div>
			<div className='flex flex-row items-center'>
				<ul className='flex flex-row'>
					<li className='p-3 text-base cursor-pointer list-none' style={pathname ==="/university"? {
					}: {}}> <Link className='cursor-pointer text-white z-50' to='/university'>Universidades</Link></li>

					<li className='p-3 text-base cursor-pointer list-none'  style={pathname ==="/schools"?{
					}: {}}> <Link className='cursor-pointer text-white z-50' to='/schools'>Colégios</Link></li>

					<li className='p-3 text-base cursor-pointer list-none' style={pathname ==="/prece"? {
					}: {}}> <Link className='cursor-pointer text-white z-50' to='/prece'>Preços</Link></li>
					<li className='p-3 text-base cursor-pointer list-none' style={pathname ==="/prece"? {
					}: {}}> <Link className='cursor-pointer text-white z-50' to='/service'>Serviços</Link></li>
					
					<li className='p-3 text-base cursor-pointer list-none' style={pathname ==="/access"? {
					}: {}}> <Link className='cursor-pointer text-white z-50' to='/access'>Entrar</Link></li>

					<li className='p-3 text-base cursor-pointer list-none bg-[#7745FF] rounded-xl' style={pathname === ""? {
					}: {}}> <Link className='cursor-pointer text-white z-50'  to='/signup/1'>Cadastra-se</Link></li>
				</ul>
			</div>
		</div>
	);
};