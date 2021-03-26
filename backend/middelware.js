import { youtubeList, youtubeListId } from './api/youtube.js'

const fetchData = async (req, res, next) => {
  let keyword = req.query.keyword || 'GoogleDevelopers'

  let results = []
  try {
    const response = await youtubeList.get('/channels', {
      params: {
        forUsername: keyword,
      },
    })

    const channelId =
      response.data.items[0].contentDetails.relatedPlaylists.uploads ||
      'UU_x5XG1OV2P6uZZ5FSM9Ttw'

    const channelList = await youtubeListId.get('/playlistItems', {
      params: {
        playlistId: channelId,
      },
    })
    results = [...channelList.data.items]
    req.results = results
    next()
  } catch (error) {
    console.log(error)
  }
}

export default fetchData
