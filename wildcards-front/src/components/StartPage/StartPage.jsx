import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './StartPage.module.css';

const StartPage = () => {
	let navigate = useNavigate();

	return (
		<div className={styles.StartPage}>
			<h1>We need to talk.</h1>
			<button onClick={() => navigate("/themes")}>&#8250; Commencer à jouer &#8249;</button>
		</div>
	)
}

export default StartPage;