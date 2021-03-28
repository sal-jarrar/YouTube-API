import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import axios from 'axios'
import Pagination from './components/Pagination'

const App = () => {
  const [videos, setVideos] = useState([])
  const [videoSelected, setVideoSelected] = useState(null)
  const [totalLength, setTotallength] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')

  const onTermSubmit = async (term) => {
    setSearch(term)
    try {
      const results = await axios.get(
        `http://localhost:5000/youtube?keyword=${term}&page=${currentPage}&limit=12`
      )
      console.log(results.data.totalLength)
      setTotallength(results.data.totalLength)
      setVideos(results.data.results)
      setVideoSelected(results.data.results[0])
    } catch (error) {
      console.log(error)
    }
  }
  const onVideoSelect = (video) => setVideoSelected(video)
  const pageinate = (pageNumber) => {
    setCurrentPage(pageNumber)
    onTermSubmit(search)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/youtube?page=1&limit=12`)
      .then((results) => {
        console.log(results)
        setTotallength(results.data.totalLength)
        setVideos(results.data.results)
        setVideoSelected(results.data.results[0])
      })
  }, [])

  return (
    <div className='ui container'>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eight wide column'>
            <VideoDetails video={videoSelected} />
            <Pagination pageinate={pageinate} totalLength={totalLength} />
          </div>

          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
