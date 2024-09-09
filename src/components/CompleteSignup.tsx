import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { completeSignup } from '../services/api';

const CompleteSignup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const updatedUser = await completeSignup(user.id, { username, phoneNumber });
      login({ ...updatedUser, accessToken: user.accessToken, refreshToken: user.refreshToken });
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to complete signup', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Complete Signup</button>
    </form>
  );
};

export default CompleteSignup;