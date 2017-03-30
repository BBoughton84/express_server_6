const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('clubs')
    .then(result => {
      res.send(result)
    })
})

router.get('/:id', (req, res) => {
  var getId = req.params.id
  knex('clubs').where('id', getId)
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

router.patch('/:id', (req, res) => {
  var newId = req.params.id
  var changeBrand = req.body.brand
  var changeNumber = req.body.number
  var changeType = req.body.type
  knex('clubs').where('id', newId).update({brand:changeBrand, number:changeNumber, type:changeType}).returning(['id', 'brand', 'type', 'number'])
    .then(result => {
      res.send(result)
    })
})

router.delete('/:id', (req, res) => {
  var deleteId = req.params.id
  knex('clubs').where('id', deleteId).del()
    .then(result => {
      res.send(200)
    })
})



module.exports = router
