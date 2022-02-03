const e = require('cors');
const { findAllQuestions, findAllQuestionsByTheme } = require('../models/questionsModel');

const getAllQuestions = async (req, res) => {
    try {
        console.log('Hello')
        const result = await findAllQuestions();
        if (!result.length) {
            res.status(400).send("Ressource not found")
        } else {
            res.status(200).json(result);
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
}

const getAllQuestionsByTheme = async (req, res) => {
    try {
        const result = await findAllQuestionsByTheme(req.params.id);
        if(!result.length) {
            res.status(400).send("Ressource not found")
        } else {
            res.status(200).json(result)
        }
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    getAllQuestions,
    getAllQuestionsByTheme
}