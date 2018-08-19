const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

app.use(morgan('dev'))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server is running on port ${port}`))
