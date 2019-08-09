import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles/button.module.scss';

const Button = ({ children, style = "default", onClick, disabled = false }) => {
  const buttonClasses = cx({
    [styles.btn]: true,
    [styles[style]]: style
  });

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;