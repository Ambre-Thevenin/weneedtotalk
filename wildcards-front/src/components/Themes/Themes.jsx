import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Themes.module.css';

const Themes = () => {
	let navigate = useNavigate();

  return (
		<div className={styles.Themes}>
			<button className={styles.themeBtn} onClick={() => navigate('/game/1')}>Office Chit-Chat</button>
			<button className={styles.themeBtn} onClick={() => navigate('/game/2')}>Get to know someone</button>
			<button className={styles.themeBtn} onClick={() => navigate('/game/3')}>Friends Party</button>
			<button className={styles.themeBtn} onClick={() => navigate('/game/4')}>Family Business</button>
		</div>
  )
}

export default Themes;