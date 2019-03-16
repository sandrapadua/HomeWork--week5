const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const playlistRouter = require('./playList/routes')
const userRouter = require('./users/routes')

app
  .use(bodyParser.json())
  .use(playlistRouter,userRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))

  