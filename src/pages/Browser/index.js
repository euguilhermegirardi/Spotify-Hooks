import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Title, List, Playlist } from './styles';
import { getPlaylistsRequest } from '../../store/modules/main/actions';
import Loading from '../../components/Loading';

export default function Browser() {
  const playlists = useSelector(state => state.playlists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistsRequest())
  },[dispatch])

  return (
    <Container>
      <Title>Playlists {playlists.loading && <Loading />}</Title>

      <List>
      {playlists.data.map(playlist => (
        <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
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
