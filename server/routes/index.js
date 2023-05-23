const app = require('express')
const router = app.Router()
const controllerOpenAi = require('../controllers/controllerOpenAi')


router.post('/summary', controllerOpenAi.summary)
router.post('/paragraph', controllerOpenAi.paragraph)
router.post('/chatbot', controllerOpenAi.chatbot)
router.post('/jscoding', controllerOpenAi.jsCoding)
router.post('/image_generator', controllerOpenAi.imageGenerator)

module.exports = router