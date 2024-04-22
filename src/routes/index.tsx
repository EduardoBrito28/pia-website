import { Route, Routes } from 'react-router-dom';
import LayoutStruture from '../layout/LayoutStruture';
import HomePage from '../pages/home';
import UserLogin from '../pages/login';
import Register from '../pages/register';
import Univercity from '../pages/university';

export default function PagesRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <LayoutStruture>
                    <HomePage />
                </LayoutStruture>
            }
            />
            <Route path='/universidade' element={
                <LayoutStruture>
                    <Univercity />
                </LayoutStruture>
            }
            />
            <Route path='/access' element={
                <LayoutStruture>
                    <UserLogin/>
                </LayoutStruture>
            }
            />
            <Route path='/signup/:id' element={
                <LayoutStruture>
                    <Register />
                </LayoutStruture>
            }
            />
        </Routes>
    );
}

