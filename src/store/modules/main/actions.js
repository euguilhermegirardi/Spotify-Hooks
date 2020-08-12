// Playlists
export function getPlaylistsRequest() {
  return {
    type: 'playlists/GET_REQUEST'
  }
}

export function getPlaylistsSuccess(data) {
  return {
    type: 'playlists/GET_SUCCESS',
    data
  }
}

// Playlist Details
export function getPlaylistDetailsRequest(id) {
  return {
    type: 'playlistDetails/GET_REQUEST',
    id
  }
}

export function getPlaylistDetailsSuccess(data) {
  return {
    type: 'playlistDetails/GET_SUCCESS',
    data
  }
}

// Player
export function loadSong(song, list) {
  return {
    type: 'player/LOAD',
    song,
    list
  }
}

export function play() {
  return {
    type: 'player/PLAY'
  }
}

export function pause() {
  return {
    type: 'player/PAUSE'
  }
}

export function prev() {
  return {
    type: 'player/PREV'
  }
}

export function next() {
  return {
    type: 'player/NEXT'
  }
}

export function playing({ position, duration }) {
  return {
    type: 'player/PLAYING',
    position, duration ,
  }
}

export function handlePosition(percent) {
  return {
    type: 'player/HANDLE_POSITION',
    percent
  }
}

export function setPosition(percent) {
  return {
    type: 'player/SET_POSITION',
    percent
  }
}

export function setVolume(volume) {
  return {
    type: 'player/SET_VOLUME',
    volume
  }
}

export function repeat() {
  return {
    type: 'player/REPEAT'
  }
}

// Error
export function setError(message) {
  return {
    type: 'error/SET',
    message
  }
}

export function hideError() {
  return {
    type: 'error/HIDE'
  }
}



