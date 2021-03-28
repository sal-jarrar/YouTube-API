import express from 'express'
import fetchData from './middelware.js'

const route = express.Router()

route.get('/youtube', fetchData, (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const youtubeAPI = {}
  let results = req.results
  console.log(results.length)
  if (endIndex < results.length) {
    youtubeAPI.next = {
      page: page + 1,
      limit,
    }
  }
  if (startIndex > 0) {
    youtubeAPI.prev = {
      page: page - 1,
      limit,
    }
  }
  youtubeAPI.totalLength = results.length
  youtubeAPI.results = results.slice(startIndex, endIndex)

  res.json(youtubeAPI)
})

export default route
