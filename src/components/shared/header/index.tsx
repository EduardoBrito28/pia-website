import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Container from '../container';
import { useEffect, useState } from 'react';

export default function Header() {
	const { pathname } = useLocation();

    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 180) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

	return (
		<div className={`top-0 w-full z-50 flex flex-row items-center justify-center h-[80px] p-0 ${sticky ? 'fixed top-[-2px] bg-transparent ' : `absolute `}`}>
			<Container>
				<div className='w-full flex justify-between items-center h-20 sticky'>
					<div>
						<Link to='/'>
							<img src={logo} alt='logo' className='h-[80px]' />
						</Link>
					</div>
					<div className='flex flex-row items-center'>
						<ul className='flex flex-row gap-2'>
							<li className={`p-3 text-base cursor-pointer list-none`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/" ? 'text-[#2CACE4]' : 'text-white'}`} to='/'>Home</Link>
							</li>
							<li className={`p-3 text-base cursor-pointer list-none`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/pagamentos" ? 'text-[#2CACE4]' : 'text-white'}`} to='/pagamentos'>Pagamentos</Link>
							</li>
							<li className={`p-3 text-base cursor-pointer list-none`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/service" ? 'text-[#2CACE4]' : 'text-white'}`} to='/service'>Serviços</Link>
							</li>
							<li className={`p-3 text-base cursor-pointer list-none`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/price" ? 'text-[#2CACE4]' : 'text-white'}`} to='/price'>Preços</Link>
							</li>
							<li className={`p-3 text-base cursor-pointer list-none`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/access" ? 'text-[#2CACE4]' : 'text-white'}`} to='/access'>Entrar</Link>
							</li>
							<li className={`p-3 text-base cursor-pointer list-none flex items-center justify-center px-4 bg-[#00A3E6] rounded-sm`}>
								<Link className={`cursor-pointer  z-50 ${pathname === "/signup/1" ? 'text-white' : 'text-white'}`} to={`${pathname === '/' ? '/solicitar-acesso' : '/signup/1'}`}>{pathname === '/' ? 'Solicitar Acesso' : 'Cadastrar-se'}</Link>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};