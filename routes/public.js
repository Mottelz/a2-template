const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', {title: 'Home', body: 'This is a page.'})
})


module.exports = router