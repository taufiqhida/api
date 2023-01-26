const express = require('express')
const router = express.Router()

const { getAllData, insertData } = require('../controllers/userController')

router.get('/', getAllData)
router.post('/', insertData)

module.exports = router