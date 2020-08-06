import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, List, Playlist } from './styles';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

export default function Browser() {
  const playlists = useSelector(state => state.playlists);
  const dispatch = useDispatch();
  useMemo(() => dispatch(PlaylistsActions.getPlaylistsRequest()), [dispatch]);

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
