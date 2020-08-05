import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Title, List, Playlist } from './styles';

export default function Browser() {
  const playlists = useSelector(state => state.reducers);

  console.log(playlists);

  return (
    <Container>
      <Title>Playlists</Title>

      <List>
      {playlists.data.map(playlist => (
        <Playlist key={playlist.id} to={`/playlist/${playlist.id}`}>
          <img
            src={playlist.thumbnail}
            alt={playlist.title}
          />
          <strong>{playlist.title}</strong>
          <p>{playlist.description}</p>
        </Playlist>
      ))}
      </List>
    </Container>
  )
}
