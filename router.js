const router = require('express').Router();
const moment = require('moment')
router.get('/', (req, res) => {
    const {page, total} = res.query
    res.send({
        status : "success",
        name : "Anfal Ibrahim",
        age : 22,
        pusblishedAt :moment(),
        

    })
})

router.get('/category/:id', (req, res) => {
    console.log(req.query );
    res.send({
        id : req.params.id
    })
})

router.get('/product/:tag', (req, res) => {
    const {product ,tag} = req.params;

    res.send({
        product : "product",
        tag : "tag"
    })
})

module.exports = router