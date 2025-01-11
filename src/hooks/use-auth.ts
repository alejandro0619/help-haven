import { useState, useEffect } from 'react';

const useUserProfile = () => {
  const [userId, setUserId] = useState<string | null>(null);


  const saveUserId = (id: string) => {
    localStorage.setItem('user_uuid', id);
    setUserId(id);
  };


  const clearUserId = () => {
    localStorage.removeItem('user_uuid');
    setUserId(null);
  };


  useEffect(() => {
    const storedUserId = localStorage.getItem('user_uuid');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return { userId, saveUserId, clearUserId };
};

export default useUserProfile;
