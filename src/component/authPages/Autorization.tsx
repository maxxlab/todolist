import { Routes, Route } from 'react-router-dom';
import App from '../App/App';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { removeUser } from '../../store/slices/userSlice';
import {useAuth} from '../../hooks/use-auth';
import { useAppDispatch } from '../../hooks/redux-hooks';

function Autorization() {
  const dispatch = useAppDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <>
      <App />
    </>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </>
  );
}

export default Autorization;