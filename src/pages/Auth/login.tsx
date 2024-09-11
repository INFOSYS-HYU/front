import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { loginWithGoogle } from '../../services/api';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // URL에서 액세스 토큰 파라미터 확인
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            handleLoginSuccess(token);
        }
    }, [location]);

    const handleLoginSuccess = async (token: string) => {
        try {
            const userData = await loginWithGoogle(token);
            login(userData);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
            // 에러 처리 로직 (예: 에러 메시지 표시)
        }
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <Link
                to={'http://localhost:3001/api/auth/google'}
                target='_blank'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Sign in with Google
            </Link>
        </div>
    );
};

export default Login;