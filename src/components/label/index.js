import React from 'react';
import styles from './styles/label.module.scss';

const Label = ({ text, color = "white", icon = null }) => {
  return (
    <div className={`${styles.label} ${styles.label}--${color}`}>
      {icon && (<i className="material-icons">{icon}</i>)}
      <span>{text}</span>
    </div>
  );
}
 
export default Label;