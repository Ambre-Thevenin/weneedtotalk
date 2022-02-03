import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {
    let navigate = useNavigate();
    return (
        <div className={styles.Header}>
            <div className={styles.leftHeader}>
            <h1 onClick={()=> navigate('/')}>We need to talk</h1>
            </div>
            <div className={styles.rightHeader}>
            <h2 onClick={()=> navigate('/rules')}>Règles</h2>
            <h2 onClick={()=> navigate('/about')}>| Nous</h2>
            </div>
        </div>
    )
}

export default Header;