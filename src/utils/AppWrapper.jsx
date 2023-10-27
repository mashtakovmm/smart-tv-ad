import React, { useEffect } from 'react';

const AppWrapper = ({ children }) => {
  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

    document.addEventListener('mousedown', preventDefault);

    return () => {
      document.removeEventListener('mousedown', preventDefault);
    };
  }, []);

  return <div>{children}</div>;
};

export default AppWrapper;