import { ReactNode } from 'react';
import Header from '../components/shared/header';

interface layout {
	children: ReactNode
}

export default function LayoutStruture({ children }: layout) {
	return (
		<div className='flex flex-col max-w-[1480px] w-[96%] m-auto'>
			<Header />
			{children}
		</div>
	);
};