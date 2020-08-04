export function getPlaylistsRequest(data) {
  return {
    type: 'playlists/GET_REQUEST'
  }
}

export function getPlaylistsSuccess (data) {
  return {
    type: 'playlists/GET_SUCCESS',
    payload: { data }
}
}
