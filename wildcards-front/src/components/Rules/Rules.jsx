import React from 'react';

import styles from './Rules.module.css';


const Rules = () => {
    return (
        <div className={styles.Rules}>
            <h1>Rules of the game</h1>
            <p>L'expérience de jeu a été pensée pour mobile avant tout. Ainsi, vous pouvez jouer n'importe ou, n'importe quand et dans différents contextes, grâce aux 4 thèmes proposés.</p>
            <p>Chaque participant répond à tour de rôle à la question qui s'affiche. L'interpretation des questions est libre à dessein. Chacun est libre de détailler ou non sa réponse.</p>
            <p>Créez un "safe space" ! Avant de commencer à jouer, demandez quels sont les thèmes que chaque participant désire éviter. Aucune explication n'est demandée. Un participant peut librement refuser de répondre à une question ou de détailler sans réponse.</p>
        </div>
    )
}

export default Rules;