import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/floating-button.module.scss';

const FloatingButton = ({ handleClick, icon }) => {
  return (
    <button className={styles.FloatingButton} onClick={handleClick}>
      <i className="material-icons">{icon}</i>
    </button>
  );
}

FloatingButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
}
 
export default FloatingButton;