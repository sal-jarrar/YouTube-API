import express from 'express'

const route = express.Router()

route.get('/youtube', (req, res) => {
  res.send({})
})

export default route
