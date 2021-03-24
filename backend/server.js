import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import youtubRoute from './routes.js'

const PORT = process.env.PORT || 5000
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Backend server')
})

app.use(youtubRoute)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
