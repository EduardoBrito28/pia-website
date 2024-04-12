import { Route, Routes } from 'react-router-dom';
import LayoutStruture from '../layout/LayoutStruture';
import HomePage from '../pages/home';
import ServicesPage from '../pages/services';
import PricesPage from '../pages/prices';

export default function PagesRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <LayoutStruture>
                    <HomePage />
                </LayoutStruture>
            }
            />
            <Route path='/services' element={
                <LayoutStruture>
                    <ServicesPage />
                </LayoutStruture>
            }
            />
            <Route path='/prices' element={
                <LayoutStruture>
                    <PricesPage />
                </LayoutStruture>
            }
            />
        </Routes>
    );
}

