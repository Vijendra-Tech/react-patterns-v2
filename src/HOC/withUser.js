import React, { useState, useEffect } from 'react';
export const withUser = (Compenenet, userId) => {
  return (props) => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
      (async () => {
        const res = await fetch(`/user/${userId}`);
        setUserName(res.data);
      })();
    }, []);

    return <Compenenet {...props} user={userName} />;
  };
};
