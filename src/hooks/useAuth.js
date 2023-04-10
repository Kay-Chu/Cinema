import { useState } from 'react';

export default function useAuth() {
  const getAuth = () => {
    const authString = localStorage.getItem('auth');
    const userAuth = JSON.parse(authString);
    return userAuth;
  };

  const [auth, setAuth] = useState(getAuth());

  const saveAuth = userAuth => {
    localStorage.setItem('auth', JSON.stringify(userAuth));
    setAuth(userAuth);
  };

  return {
    setAuth: saveAuth,
    auth
  }
}