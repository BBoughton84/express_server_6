const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('clubs')
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  var newBrand = req.body.brand
  var newNumber = req.body.number
  var newType = req.body.type
  knex('clubs').insert({brand:newBrand, number:newNumber, type:newType}).returning(['id', 'brand', 'number', 'type'])
    .then(result => {
      res.send(result)
    })
})





module.exports = router
