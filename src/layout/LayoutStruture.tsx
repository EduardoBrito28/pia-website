import { ReactNode } from 'react';
import Footer from '../components/shared/Footer';

interface layout {
	children: ReactNode
}

export default function LayoutStruture({ children }: layout) {
	return (
		<div className='flex flex-col m-auto'>
			
			{children}
			<Footer />
		</div>
	);
};