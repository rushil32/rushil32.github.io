import React from 'react';
import styles from './styles/Banner.module.scss';

const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      {children}
    </div>
  );
}
 
export default Banner;