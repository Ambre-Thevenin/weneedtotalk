const router = require('express').Router();
const questionsController  = require('../controller/questionsController')

router.get('/', questionsController.getAllQuestions)
router.get('/theme/:id', questionsController.getAllQuestionsByTheme)

module.exports = router;