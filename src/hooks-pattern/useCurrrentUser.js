import { useState, useEffect } from 'react';

const useCurrentUser = () => {
  const [cuurentUser, setCurrentUser] = useState('');

  useEffect(() => {
    (async () => {
      const resposne = await fetch('/current-user');
      setCurrentUser(resposne.data);
    })();
  }, []);

  return cuurentUser;
};
