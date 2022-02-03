const mysql = require('../db');

const findAllQuestions = async () => {
    try {
        const result = await mysql.query('SELECT * FROM question');
        return result[0];
    }
    catch (err) {
        console.log(err)
    }
}

const findAllQuestionsByTheme = async (id) => {
    try {
        const result = await mysql.query('SELECT * FROM question_has_theme INNER JOIN question ON question.id = question_has_theme.question_id WHERE theme_id = ?', [parseInt(id)]);
        return result[0];
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    findAllQuestions,
    findAllQuestionsByTheme
}