import axios from 'axios'

const KEY = 'AIzaSyAOhdwZwfVi8RLwribWAkiGXWEHxw6DZN8'

export const youtubeList = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'contentDetails',
    key: KEY,
  },
})

export const youtubeListId = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY,
    type: 'video',
    maxResults: 50,
  },
})
