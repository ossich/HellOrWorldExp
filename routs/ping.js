const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('ping', {
        title: 'Ping-pong',
        isPing: true
    })
})

module.exports = router