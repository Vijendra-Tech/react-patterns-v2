import React, { useState, useEffect } from 'react';
export const withUser = (Compenent, userId) => {
  return (props) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
      (async () => {
        const res = await fetch(`/user/${userId}`);
        setUserName(res.data);
      })();
    }, []);

    return <Compenent {...props} user={userName} />;
  };
};
