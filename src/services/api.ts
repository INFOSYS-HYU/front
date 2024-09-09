import { User } from '@/atoms/atom.tsx';
import axios from '../utils/axios.ts';

export const loginWithGoogle = async (tokenId: string) => {
  const response = await axios.post<{ user: any; accessToken: string; refreshToken: string }>('/auth/google', { tokenId });
  return response.data;
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await axios.post<{ accessToken: string }>('/auth/refresh', { refreshToken });
  return response.data;
};

export const completeSignup = async (userId: string, additionalInfo: any) => {
    const response = await axios.post<User>(`/auth/complete-signup/${userId}`, additionalInfo);
    return response.data;
  };
  
export const checkUserExists = async (accessToken: string) => {
    console.log(`Authorization: Bearer ${accessToken}`    )
    const response = await axios.get<{ exists: boolean; userId?: string }>('/login', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  };