import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import axios from 'axios'

const App = () => {
  const [videos, setVideos] = useState([])
  const [videoSelected, setVideoSelected] = useState(null)

  const onTermSubmit = async (term = '') => {
    try {
      const results = await axios.get(
        `http://localhost:5000/youtube?keyword=${term}&page=1&limit=12`
      )

      setVideos(results.data)
      setVideoSelected(results.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  const onVideoSelect = (video) => setVideoSelected(video)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/youtube?page=1&limit=12`)
      .then((results) => {
        setVideos(results.data)
        setVideoSelected(results.data[0])
      })
  }, [])

  return (
    <div className='ui container'>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eight wide column'>
            <VideoDetails video={videoSelected} />
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
