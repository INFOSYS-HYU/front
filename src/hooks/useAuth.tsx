import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState, User } from '../atoms/atom';
import { refreshToken as refreshTokenService, logout as logoutService } from '../services/api';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const initAuth = async () => {
      const storedAccessToken = localStorage.getItem('accessToken');
      if (storedAccessToken) {
        try {
          const newAccessToken = await refreshTokenService();
          setAuth(prev => ({ ...prev, accessToken: newAccessToken, loading: false }));
        } catch (error) {
          console.error('Failed to refresh token', error);
          logout(); // 토큰 갱신 실패 시 로그아웃
        }
      } else {
        setAuth(prev => ({ ...prev, loading: false }));
      }
    };

    initAuth();
  }, []);

  const login = (userData: { user: User; accessToken: string }) => {
    setAuth({
      user: userData.user,
      accessToken: userData.accessToken,
      loading: false,
    });
    localStorage.setItem('accessToken', userData.accessToken);
  };

  const logout = () => {
    logoutService()
      .then(() => {
        setAuth({
          user: null,
          accessToken: null,
          loading: false,
        });
        localStorage.removeItem('accessToken');
      })
      .catch(error => console.error('Logout failed', error));
  };

  return { ...auth, login, logout };
};