const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const clubs = require('./routes/club.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/clubs', clubs)

app.listen(PORT, function() {
  console.log(`listening to port ${PORT} on day 6`)
})
