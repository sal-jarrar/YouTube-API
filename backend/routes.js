import express from 'express'
import fetchData from './middelware.js'

const route = express.Router()

route.get('/youtube', fetchData, (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  let results = req.results
  if (startIndex < results.length) {
    results.next = {
      page: page + 1,
      limit,
    }
  }
  if (endIndex > 0) {
    results.next = {
      page: page - 1,
      limit,
    }
  }

  results = results.slice(startIndex, endIndex)
  res.json(results)
})

export default route
