import { Route, Routes } from 'react-router-dom';
import LayoutStruture from '../layout/LayoutStruture';
import PaymentPage from '../pages/payment';
import UserLogin from '../pages/login';
import Register from '../pages/register';
import Univercity from '../pages/university';
import HomePage from '../pages/home';
import RequestAccess from '../pages/requestAccess';
import SignUp from '../pages/requestAccess/signUp';

export default function PagesRouter() {
    return (
        <Routes>
            <Route path='/' element={
                <LayoutStruture>
                    <HomePage />
                </LayoutStruture>
            }
            />
            <Route path='/pagamentos' element={
                <LayoutStruture>
                    <PaymentPage />
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
                    <UserLogin />
                </LayoutStruture>
            }
            />
            <Route path='/solicitar-acesso' element={
                <LayoutStruture>
                    <RequestAccess />
                </LayoutStruture>
            }
            />
            <Route
                path="/sigup/:user"
                element={
                    <LayoutStruture>
                        <SignUp />
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

