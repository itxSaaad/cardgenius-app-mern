import React, { useEffect, useState } from 'react';

const Message = ({ variant, children }) => {
  const successStyles =
    'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative';
  const warningStyles =
    'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative';
  const errorStyles =
    'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative';
  const infoStyles =
    'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative';

  const styles = {
    success: successStyles,
    warning: warningStyles,
    error: errorStyles,
    info: infoStyles,
  };

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`${styles[variant]} mb-4`} role="alert">
      <span className="block sm:inline">{children}</span>
    </div>
  );
};

export default Message;
