const environment = process.env.NODE_URL || 'development'
const config = require('../knexfile.js')[environment]
const knex = require('knex')(congif)

module.exports = knex
