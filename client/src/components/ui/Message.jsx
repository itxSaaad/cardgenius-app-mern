import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Message = ({ children }) => {
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

  const iconStyles = {
    success: 'fas fa-check-circle',
    warning: 'fas fa-exclamation-circle',
    error: 'fas fa-times-circle',
    info: 'fas fa-info-circle',
  };

  const getStatusText = (status) => {
    if (status >= 200 && status <= 299) {
      return 'Success';
    } else if (status >= 400 && status <= 499) {
      return 'Client Error';
    } else if (status >= 500 && status <= 599) {
      return 'Server Error';
    } else {
      return 'Unknown Status';
    }
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

  let alertStyle = '';
  let icon = '';

  if (children.status >= 200 && children.status <= 299) {
    alertStyle = styles.success;
    icon = iconStyles.success;
  } else if (children.status >= 400 && children.status <= 499) {
    alertStyle = styles.warning;
    icon = iconStyles.warning;
  } else if (children.status >= 500 && children.status <= 599) {
    alertStyle = styles.error;
    icon = iconStyles.error;
  } else {
    alertStyle = styles.info;
    icon = iconStyles.info;
  }

  return (
    <div className={alertStyle} role="alert">
      <i className={`${icon} mr-2`}></i>
      <strong className="font-bold mr-2">
        {getStatusText(children.status)}:
      </strong>
      <span className="block sm:inline">{children.message}</span>
    </div>
  );
};

Message.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Message;
