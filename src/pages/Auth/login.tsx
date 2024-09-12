import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useRecoilState } from 'recoil';
import { AuthState, authState } from '@/atoms/atom';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
  const [, setAuth] = useRecoilState<AuthState>(authState);
const navigate = useNavigate()
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      try {
        const { data } = await axios.post('http://localhost:3001/api/auth/google/callback', {
          code: codeResponse.code,
        });
        
        const { accessToken, user, refreshToken } = data;

        localStorage.setItem('refreshToken', refreshToken);
        setAuth({
          user,
          accessToken,
          refreshToken,
          loading: false,
        });
        navigate('/')
        console.log('로그인 성공:', data);
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    },
    onError: (error) => console.error('구글 로그인 에러:', error),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => googleLogin()}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;