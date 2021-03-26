import React from 'react'

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>
  const videoSrc = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='youtube video' />
      </div>
      <div className='ui segment'>
        <div className='ui header'>
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
