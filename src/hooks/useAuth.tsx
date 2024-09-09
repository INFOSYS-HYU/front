import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState, User } from '../atoms/atom';
import { refreshAccessToken, logout as logoutService } from '../services/auth.ts';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    const initAuth = async () => {
      if (auth.accessToken) {
        try {
          await refreshAccessToken();
          // Here you would typically fetch user info and update the state
        } catch (error) {
          console.error('Failed to initialize auth', error);
        }
      }
      setAuth(prev => ({ ...prev, loading: false }));
    };

    initAuth();
  }, []);

  const login = (userData: { user: User; accessToken: string; refreshToken: string }) => {
    setAuth({
      user: userData.user,
      accessToken: userData.accessToken,
      refreshToken: userData.refreshToken,
      loading: false,
    });
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('refreshToken', userData.refreshToken);
  };

  const logout = () => {
    logoutService();
    setAuth({
      user: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return { ...auth, login, logout };
};