const express = require('express')
const app = express()
require('dotenv').config()
const connectToMongo = require('./db')
connectToMongo();

const cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`)
})