import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className='ui relaxed divided list'>
      {videos.map((video) => (
        <VideoItem
          video={video}
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
        />
      ))}
    </div>
  )
}

export default VideoList
