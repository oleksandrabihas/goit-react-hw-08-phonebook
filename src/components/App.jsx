import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'))
const RegisterPage = lazy(() => import('pages/RegisterPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage'))
const ErrorPage = lazy(() => import('pages/ErrorPage'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="signUp" element={<RegisterPage />} />
        <Route path="logIn" element={<LoginPage />} />
        <Route path='contacts' element={<ContactsPage/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}