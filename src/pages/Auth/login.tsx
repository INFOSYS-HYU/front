import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { loginWithGoogle, checkUserExists } from '../../services/api.ts';
import { useAuth } from '../../hooks/useAuth.tsx';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            console.log(response)
            try {
                const { exists, userId } = await checkUserExists(response.access_token);
                if (exists) {
                    const data = await loginWithGoogle(response.access_token);
                    login(data);
                    navigate('/dashboard');
                } else {
                    navigate('/complete-signup', { state: { googleToken: response.access_token } });
                }
            } catch (error) {
                console.error('Login failed', error);
            }
        },
        onError: (error) => console.error('Login Failed:', error)
    });

    return (
        <div className='mt-20'>    
        <button onClick={() => googleLogin()}>
            Sign in with Google
        </button>
        </div>

    );
};

export default Login;