import { Route, Routes } from 'react-router-dom';
import LayoutStruture from '../layout/LayoutStruture';
import HomePage from '../pages/home';
import PricesPage from '../pages/prices';
import UserLogin from '../pages/accessUser';

export default function PagesRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <LayoutStruture>
                    <HomePage />
                </LayoutStruture>
            }
            />
            <Route path='/access' element={
                <LayoutStruture>
                    <UserLogin />
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

